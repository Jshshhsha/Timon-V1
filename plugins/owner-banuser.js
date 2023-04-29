// import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    if (!text) throw '( اكتب الرقم الذي ترغب ب حظره )'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one of them bro'
    let users = db.data.users
    users[who].banned = true
    conn.reply(m.chat, `( تم الحظر )`, m)
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^(حظر)$/i
handler.rowner = true

export default handler
