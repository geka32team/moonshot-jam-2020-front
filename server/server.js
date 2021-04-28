const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const tasks = require('./tasks')
const query = require('./query')
const battle_calc = require('./battle_calc')
const exp_calc = require('./exp_calc')
const bot_generator = require('./bot_generator')
const bodyParser = require('body-parser')

const port = 9000
const app = express()
app.use(cors())
app.use(bodyParser.json())

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "MoonnyMathics",
//   password: "12345678",
//   port: 5432,
// });

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MoonnyMathics',
  password: '12345678',
  port: 5432,
})
// client.connect();

app.get('/character/:name', (req, res) => {
  pool.query(query.get_char_info, [req.params.name], (err, response) => {
    res.send(response.rows)
  })
})

app.post('/register', (req, res) => {
  pool.query(query.check_character, [req.body.username], (error, response) => {
    if (response.rows[0].count === '0') {
      pool.query(
        query.create_character,
        [req.body.username, req.body.password],
        (err, response) => {
          pool.query(query.create_bot, [
            req.body.username + 'Bot',
            req.body.username,
          ])
          res.sendStatus(200)
        }
      )
    } else {
      res.sendStatus(401)
    }
  })
})

app.post('/signin', (req, res) => {
  const { username, password } = req.body
  pool.query(query.check_auth, [username, password], (err, response) => {
    if (response.rows[0].count === '1') res.sendStatus(200)
    else res.sendStatus(401)
  })
})

app.get('/getexp', (req, res) => {
  const lvl = req.query.lvl
  const bot_lvl = req.query.botlvl
  const diff = req.query.diff
  const exp = exp_calc.get_real_exp(lvl, bot_lvl, diff) + ''
  res.send([exp])
})

app.get('/bot/:name', (req, res) => {
  pool.query(query.get_bot_info, [req.params.name], (err, response) => {
    res.send(response.rows)
  })
})

app.get('/stats', (req, res) => {
  const stat_name = req.query.stat
  const nickname = req.query.nickname

  pool.query(query.get_stat, [nickname], (err, response) => {
    const { free_stats } = response.rows[0]
    if (err) console.log(err)
    else res.send([200])

    if (free_stats > 0) pool.query(query[`set_${stat_name}`], [nickname])
  })
})

app.get('/newbot', (req, res) => {
  const diff = +req.query.diff
  const bot_lvl = +req.query.lvl
  const nickname = req.query.nickname

  let gen_bot = bot_generator.bot(bot_lvl, diff, nickname, 'Test_bot')
  const params = [
    gen_bot.nickname,
    gen_bot.lvl,
    gen_bot.hp,
    gen_bot.current_hp,
    gen_bot.str,
    gen_bot.vit,
    gen_bot.dex,
    gen_bot.acc,
    gen_bot.dmg,
    gen_bot.date,
    gen_bot.diff,
    gen_bot.attacker_nickname,
  ]

  pool.query(query.set_bot, params, () => {
    res.send([200])
  })
})

app.get('/task', (req, res) => {
  const diff = req.query.diff
  const bot_lvl = req.query.lvl
  const nickname = req.query.nickname
  const [value, result] = tasks.difficulty[diff](bot_lvl)

  pool.query(query.create_task, [value, result, nickname, Date.now()])

  res.send([value, result.length])
})

app.get('/battleresult/:name', (req, res) => {
  pool.query(query.get_char_info, [req.params.name], (err, response) => {
    const {
      hp,
      exp,
      current_exp,
      current_hp,
      lvl,
      free_stats,
      bosses_defeat,
    } = response.rows[0]
    pool.query(query.set_hp_exp, [hp, current_exp, free_stats, req.params.name])
    if (err) res.send(err)
    else res.send([200])
  })
})

app.get('/answer', (req, res) => {
  const value = req.query.value
  const nickname = req.query.nickname
  let char
  let enemy
  let task_params

  pool.query(query.get_result, [nickname], (err, response) => {
    task_params = response.rows[0]
    let result = task_params.result
    let created = task_params.created

    pool.query(query.get_char_info, [nickname], (err, response) => {
      char = response.rows[0]

      pool.query(query.get_current_bot_info, [nickname], (err, response) => {
        enemy = response.rows[0]
        let [char_hit, is_char_crit] = battle_calc.calc(
          char.lvl,
          char.dmg,
          char.dex,
          char.str,
          char.acc,
          char.vit,
          enemy.lvl,
          enemy.str,
          enemy.acc,
          (Date.now() - created) / 1000,
          char.time,
          true
        )
        const [enemy_hit, is_enemy_crit] = battle_calc.calc(
          enemy.lvl,
          enemy.dmg,
          enemy.dex,
          enemy.str,
          enemy.acc,
          enemy.vit,
          char.lvl,
          char.str,
          char.acc
        )

        if (value != result) char_hit = 0
        let hp_left = char.current_hp - enemy_hit
        let enemy_hp_left = enemy.current_hp - char_hit
        let is_end = hp_left < 1 || enemy_hp_left < 1

        let result_fight = null
        if (is_end)
          result_fight =
            hp_left > enemy_hp_left
              ? 'win'
              : hp_left < enemy_hp_left
              ? 'lose'
              : 'draw'
        let exp =
          result_fight == 'win'
            ? exp_calc.get_real_exp(char.lvl, enemy.lvl, enemy.diff)
            : 0

        let ret = {
          char_hit,
          enemy_hit,
          drop: [],
          is_end,
          result_fight,
          is_char_crit,
          is_enemy_crit,
          exp,
        }

        let set_current_exp = char.current_exp + exp
        let set_exp = char.exp
        let set_lvl = char.lvl
        let set_free_stats = char.free_stats
        if (set_current_exp >= exp_calc.get_level_exp(char.lvl)) {
          set_lvl += 1
          set_free_stats += 5
          set_exp = exp_calc.get_level_exp(set_lvl)
          set_current_exp -= char.exp
        }

        pool.query(
          query.set_character,
          [
            set_lvl,
            set_free_stats,
            hp_left,
            set_exp,
            set_current_exp,
            nickname,
          ],
          (err, response) => {
            pool.query(
              query.set_bot_hp,
              [enemy_hp_left, nickname],
              (err, response) => {
                res.send(ret)
              }
            )
          }
        )
      })
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
