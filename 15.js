/*
15. list.js - files papkasidagi barcha fayl nomlarini konsolga chiqaring. 
Agar files papkasi mavjud bo'lmasa, "FS operation failed" xabari bilan xato
tashlashingiz kerak.
*/
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fileDir = path.join(__dirname, "files")
fs.readdir(fileDir, {encoding: "utf8"},(err,files)=>{
    if(err){
        console.log("Error while matching files: ", err)
        return;
    }
    console.log("The files in this directory of files: \n")
    files.forEach((file)=>{
        console.log(file)
    })
})