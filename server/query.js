exports.create_task =
  'INSERT INTO public.tasks(value, result, character_nickname, created) VALUES ($1, $2, $3, $4)'

exports.set_character =
  'UPDATE public.character SET lvl =$1, free_stats = $2, current_hp = $3, exp = $4, current_exp = $5 WHERE nickname = $6;'

exports.set_bot =
  'UPDATE public.bot SET nickname=$1, lvl=$2, hp=$3, current_hp=$4, str=$5, vit=$6, dex=$7, acc=$8, dmg=$9, date=$10, diff=$11 WHERE attacker_nickname = $12;'

exports.set_bot_hp =
  'UPDATE public.bot SET current_hp = ($1) WHERE attacker_nickname = ($2);'

exports.set_hp_exp =
  'UPDATE public.character SET current_hp = ($1), current_exp = ($2), free_stats = ($3) WHERE nickname = ($4);'

exports.set_str =
  'UPDATE public.character SET str = str + 1, free_stats = free_stats - 1 WHERE nickname = ($1);'

exports.set_vit =
  'UPDATE public.character SET vit = vit + 1, free_stats = free_stats - 1, hp = vit * 4 + 54, current_hp = vit * 4 + 54  WHERE nickname = ($1);'

exports.set_dex =
  'UPDATE public.character SET dex = dex + 1, free_stats = free_stats - 1 WHERE nickname = ($1);'

exports.set_acc =
  'UPDATE public.character SET acc = acc + 1, free_stats = free_stats - 1 WHERE nickname = ($1);'

exports.get_stat =
  'SELECT free_stats FROM public.character WHERE nickname = ($1);'

exports.get_char_info = 'SELECT * FROM public.character WHERE nickname = ($1);'

exports.get_bot_info =
  'SELECT * FROM public.bot WHERE attacker_nickname = ($1);'

exports.get_task =
  'SELECT result, created FROM public.tasks WHERE character_nickname = ($1) ORDER BY created DESC LIMIT 1;'

exports.get_current_bot_info =
  'SELECT * FROM public.bot WHERE attacker_nickname = ($1) ORDER BY date DESC LIMIT 1;'

exports.get_result =
  'SELECT result, created FROM public.tasks WHERE character_nickname = ($1) ORDER BY created DESC LIMIT 1;'
