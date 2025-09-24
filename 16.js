/*
16. read.js - fileToRead.txt faylining tarkibini konsolga chiqaring. 
Agar fileToRead.txt fayli mavjud bo'lmasa, "FS operation failed" xabari bilan xato
tashlashingiz kerak.
*/
import fs, {existsSync} from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "fileToRead.txt")
if(existsSync(filePath) && filePath !== null){
    fs.readFile(filePath, {encoding:"utf8"},(err,data)=>{
        if(err){
            console.error("Error while reading the file, sorry!")
            return;
        }
        console.log("The info of the given file: ", data)
    })
}
else{
    console.log("Sorry, this file doesn't exist or it is empty!")
}