/*
8. Yozishni Boshlaymiz! :
"Hello World!" xabarini "message.txt" deb nomlangan yangi faylga yozadigan fs.writeFileSync dan foydalanadigan skript yarating.
Potentsial xatolarni muloyimlik bilan qo'lga olish (masalan, try-catch bloki yordamida).
Agar fayl muvaffaqiyatli yozilgan bo'lsa, konsolda muvaffaqiyat xabarini chiqaring.

*/
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "message.txt")
try{
    fs.writeFileSync(filePath, "Hello World!")
    console.log("File created successfully!")
}catch(err){
    console.error("Error creating a file", err.message)
}