let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `───[🐈‍⬛]───╮
│╭────────────────────
┴│🐈‍⬛ مرحباً!
⬡│( أنـا تـيـمـون )
⬡│ *( القط الأسود ) (🐈‍⬛)*
│╰────────────────────
┠───[ معلومات ]────╮
│╭────────────────────
┴│ ( تـيـمـون )
⬡│💻 هو بوت واتساب حديث تم صنعه بواسطة :
⬡│👨‍💻 Alazhar (🇴🇲)
⬡│👩‍💻 Nya (🇾🇪)
⬡│📞 للتواصل معنا, انضم عبر الرابط :
⬡│📌 https://chat.whatsapp.com/CLELmSuuVZaHSq1lOjmXhB
⬡│🙅‍♂️ *( لاتتصل على البوت )*
│╰────────────────────
┠───[ كيف تستخدم البوت ؟ ]────⋆
┴│💡 سوف أعطيكم بعض الأمثلة على كيفية أستخدامه :
⬡│🔸 .منشن 
⬡│- هذا الامر خاص بالمنشن.
⬡│🔸 .طقم 
⬡│- هذا امر مخصوص ل طقم صور الانمي.
⬡│🔸 .ملصق 
⬡│- تحويل الصورة او فيديو إلى ملصق.
┬│🔸 .صورة 
⬡│- هذا امر يطلب اي صورة من جوجل مثال: اكتب .صورة قطة
│╰──────────────
│╰────────═┅═────

┠───[ الأوامر ]────⋆

⬡│🔸 القائمة | الأوامر.
⬡│- *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 قراءة.المزيد | .رييدمور
⬡│- *( الامر الخاص في قائمة الاوامر )*

─⋆ ( قائمة المطور )

⬡│🔸 حظر
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 إلغاء
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 قريباً 
⬡│-  *( .... )*
⬡│🔸 قريباً 
⬡│-  *( .... )*

─⋆ ( قائمة الجروب )

⬡│🔸منشن | مخفي
⬡│-  *( الامر الخاص ف المنشن هو . منشن والامر الخاص ف المنشن المخفي هو .مخفي )*

─⋆ ( قائمة المشرفين )

⬡│🔸 رابط
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 اضافة 
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 طرد 
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 ترقية | تخفيض
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 حطها.خلفية
⬡│-  *( الامر الخاص في قائمة الاوامر )*

─⋆ ( البحث )

⬡│🔸 صورة
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 فيديو
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 طقم
⬡│-  *( الامر الخاص في قائمة الاوامر )*

─⋆ ( الملصقات )

⬡│🔸 ملصق | sticker
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸لصورة
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸 لفيديو
⬡│-  *( الامر الخاص في قائمة الاوامر )*
⬡│🔸تغيير.حقوق | سرقة 
⬡│-  *( الامر الخاص في قائمة الاوامر )*

─⋆ ( الألعاب )

⬡│🔸 كت/كتت/كتتت 
⬡│-  *( الأمر الخاص بالكتابة )*
⬡│🔸 قريباً 
⬡│-  *( .... )*
⬡│🔸 قريباً 
⬡│-  *( .... )*
│╰──────────────
│ *( البوت تحت الصيانة )*
╰────────═┅═────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.منشن', buttonText: {displayText: '( المنشن الجماعي )'}, type: 1},
  {buttonId: '.طقم', buttonText: {displayText: '( تطقيمات )'}, type: 1},
  {buttonId: '.مخفي', buttonText: {displayText: '( المنشن المخفي )'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Menu'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(pengumuman|القائمة|announce|الاوامر|pengahyshshh|الأوامر|baghshahsjjs|تيمون|sosjajaijsh|اوامر|jrjshdhdjsnsb|أوامر)$/i

export default handler
