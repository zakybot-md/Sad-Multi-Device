import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 By zaky gans 』*', `Listening to: add zakybot-md
01:43 ━━━━●───── 03:50
⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻﻿
               ılıılıılıılıılıılı
ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▮▮▮▮

▀█ ▄▀█ █▄▀ █▄█
█▄ █▀█ █░█ ░█░
*🇲🇨bagi user yang memakai zakybot tolong jangan di spam ya karena gw cape anjing🗿*
*🇬🇧For users who use Zakybot, please don't spam, because I'm tired of dogs🗿*
*🇮🇳ज़कीबोट का उपयोग करने वाले उपयोगकर्ताओं के लिए, कृपया स्पैम न करें, क्योंकि मैं कुत्तों से थक गया हूँ🗿*,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'wa.me/6281365255567', 'Owner Zakybot-MD😈', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\njangan spam ya tod🗿`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler