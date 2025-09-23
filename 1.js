/*
== Kodni tushunishni osonlashtirish uchun sharh qo'ying!==
==ASYNCHRONE VA SYNC qilib ishlang ==
1. writeNumbers Funksiyasi:
100 ta tasodifiy son generatsiya qiladi (masalan, 1 dan 100 gacha).
Har bir sonni yangi qatorga sonlar.txt fayliga yozadi.
*/
import fs from "node:fs"
import path from "node:path"
//ASYNCHRONOUS VERSION 1
function writeNumbers(){
    let data = []
        for (let i=0; i<100; i++){
            data.push(Math.floor(Math.random()* (100-1+1))+1)
        }
        let content = data.join("\n")
        fs.writeFile("./example.txt",`${content}`, (err)=>{
            if(err){
                console.error("Failed to write", err)
                return;
            }
        })
        console.log("DATA HAS BEEN WRITTEN ASYNCHRONICALLY")
}
//SYNCHRONOUS VERSION 2
function writeNumbersSync(){
    const data = []
        for (let i=0; i<100; i++){
            data.push(Math.floor(Math.random()* (100-1+1))+1)
        }
         let content = data.join("\n")
            fs.writeFileSync("./example.txt", `${content}`,{
            encoding: "utf8"
        })
        console.log("Numbers have been written Synchronically")
}
writeNumbers()
writeNumbersSync()


