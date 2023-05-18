let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'فتح': 'not_announcement',
        'قفل': 'announcement',
        'unlock': 'unlocked',
        'lock': 'locked',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Incorrect format! Example :*
  *○ ${usedPrefix + command} قفل*
  *○ ${usedPrefix + command} فتح*
  *○ ${usedPrefix + command} unlock*
  *○ ${usedPrefix + command} lock*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(قروب)$/i

handler.admin = true
handler.botAdmin = true

export default handler
