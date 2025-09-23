/*
== Kodni tushunishni osonlashtirish uchun sharh qo'ying!==
==ASYNCHRONE VA SYNC qilib ishlang ==
2. readNumbers Funksiyasi:
sonlar.txt faylidan barcha sonlarni o'qiydi.
O'qilgan sonlarni massivga saqlaydi.
*/
import fs from "node:fs"
import path from "node:path"

//ASYNCHRONOUS VERSION 1
function readNumbers(){
    fs.readFile("./example.txt",{encoding:"utf8"},(err,data)=>{
        if(err){
            console.error("Failed to read the file", err)
            return 
        }
        let numbers = data.split("\n").map((item)=>item.trim())
        console.log("Data recieved for the file Asynchronically: ", numbers)
    })
}

// SYNCHRONOUS VERSION 2:
function readNumbersSync(){
    const data = fs.readFileSync("./example.txt", {encoding: "utf8"})
    let numbers = data.split("\n").map((item)=>item.trim())
    console.log("Data recieved for the file Asynchronically: ", numbers)
}
readNumbers()
readNumbersSync()