/*
10. Katalogni Qazib Olish :
Kataloglarni o'rganaylik! Joriy ishchi katalog tarkibini (fayl nomlari) o'qish uchun fs.readdir dan foydalaning.
Qaytgan ro'yxat orqali aylanib, har bir fayl nomini konsolda chiqaring.
*/
import fs from "node:fs"

fs.readdir("./", {encoding: "utf8"},(err,files)=>{
    if(err){
        console.log("Error while matching files: ", err)
        return;
    }
    console.log("The files in this directory: \n")
    files.forEach((file)=>{
        console.log(file)
    })
})