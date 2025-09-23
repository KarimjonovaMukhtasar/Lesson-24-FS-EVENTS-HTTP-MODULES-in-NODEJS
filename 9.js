/*
9. Qo'shish! :
Endi bir oz ziravor qo'shamiz! " This is appended content." 
qo'shimcha xabarini "message.txt" fayliga qo'shadigan fs.appendFile dan foydalaning.
Yana xatolarni muloyimlik bilan qo'lga olish kerak. 
Qo'shimcha muvaffaqiyatli bo'lganida muvaffaqiyat xabarini chiqaring.
*/
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "message.txt")
fs.appendFile(filePath, "\n This is appended content.",(err)=>{
    if(err){
        console.error("Error while appending, sorry!", err.message)
        return;
    }
    console.log("Appended Successfully!")
})
