require('dotenv').config()

let url = process.env.REACT_APP_API_URL || 'http://127.0.0.1:9000/'
const get_headers = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const post = (endPoint, data = {}) => fetch(url + endPoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: "include"
})

export const postNoData = (endPoint) => fetch(url + endPoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: "include"
})

export const get = (endPoint) => fetch(url + endPoint, get_headers)
.then(res => res.json())

export const get_task = (lvl, diff, nickname) => fetch(`${url}task?lvl=${lvl}&diff=${diff}&nickname=${nickname}`, get_headers)
.then(res => res.json())

export const get_answer = (value, nickname) => fetch(`${url}answer?value=${value}&nickname=${nickname}`, get_headers)
.then(res => res.json())

export const get_char_info = (user) => fetch(`${url}character/${user}`, get_headers)
.then(res => res.json())

export const get_bot_info = (user) => fetch(`${url}bot/${user}`, get_headers)
.then(res => res.json())

export const battle_result = (user) => fetch(`${url}battleresult/${user}`, get_headers)
.then(res => res.json())

export const up_stats = (nickname, stat) => fetch(`${url}stats?nickname=${nickname}&stat=${stat}`, get_headers)
.then(res => res.json())