let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}┌─「 الـمـنـشـن الـجـمـاعـي 」\n` + users.map(v => '│🐈‍⬛ : @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن.جماعي|منشن']
handler.admin = true
handler.group = true

export default handler
