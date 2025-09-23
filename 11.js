/*
11. create.js - files papkasida fresh.txt nomli yangi fayl yarating, ichiga "I am fresh and young" matnini yozing. 
Agar fayl allaqachon mavjud bo'lsa, "FS
operation failed" xabari bilan xato tashlashingiz kerak.
*/
import { existsSync } from "node:fs"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const folderPath = path.resolve(__dirname, "files")
const filePath = path.join(folderPath, "fresh.txt")
if(existsSync(filePath)){
    console.log("FS operation failed, this file already exists")
}
else{
    fs.mkdir(folderPath, (err)=>{
        if(err){
            console.error("Error while creating a folder  ", err.message)
            return;
        }
        console.log("Folder created Successfully")
    })
    fs.writeFile(filePath,"I am fresh and young", (err)=>{
         if(err){
            console.error("Error while creating a file and writing to it  ", err.message)
            return;
        }
        console.log("File created Successfully & written the text!")
    })
}