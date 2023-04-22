import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `مثال : ${usedPrefix}${command} دراغون بول`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*${htki} جـوجـل ${htka}*
🔎 *( الـبـحـث ) :* ( ${text} )
🌎 *( الـمـصـدر ) :* ( جـوجـل )
`,m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(صورة)$/i

export default handler
