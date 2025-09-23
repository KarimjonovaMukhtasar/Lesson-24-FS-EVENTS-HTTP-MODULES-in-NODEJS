/*
7. O'qish va O'rganish:
Foydalanuvchidan process.argv yordamida ko'rsatilgan fayl tarkibini o'qish uchun fs.readFile dan foydalanadigan 
Node.js skriptini yozing.
Agar fayl mavjud bo'lsa, uning tarkibini konsolda ko'rsating.
Agar fayl mavjud bo'lmasa yoki xato bo'lsa, foydalanuvchi uchun do'stona xato xabarini berib turadigan tuzilma yarating.
*/
import fs, { existsSync } from "node:fs"
import path from "node:path"
const fileName = process.argv[2]
if(existsSync(fileName) && fileName !== null){
    fs.readFile(fileName, {encoding:"utf8"},(err,data)=>{
        if(err){
            console.error("Error while reading the file, sorry!")
            return;
        }
        console.log("The info of the given file: ", data)
    })
}
else{
    console.log("Sorry, this file doesn't exist!")
}