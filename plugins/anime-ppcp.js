import { Couples } from 'dhn-api'
var handler = async (m, { conn, command }) => {

const res = await Couples() 
await conn.sendFile(m.chat, res.male, 'ppcp.jpg', '( ذكـر ) (🙋🏻‍♂️)', m) 
return conn.sendFile(m.chat, res.female, 'ppcp.jpg', '( أنـثـى ) (🙋🏻‍♀️)', m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(تطقيم|طقم)$/i
export default handler
