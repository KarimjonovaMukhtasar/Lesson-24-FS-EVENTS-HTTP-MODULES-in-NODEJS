/*
12. copy.js - files papkasini va uning barcha tarkibini files_copy nomli yangi papkaga nusxalang. 
Agar files papkasi mavjud bo'lmasa yoki files_copy
allaqachon yaratilgan bo'lsa, "FS operation failed" xabari bilan xato tashlashingiz kerak.
*/
import fs, { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SfolderPath = path.join(__dirname, "files")
const DfolderPath = path.join(__dirname, "files_copy")
if (existsSync(DfolderPath) || !existsSync(SfolderPath)) {
    console.log("FS operation failed! The Target folder already exists! or The source folder doesn't exist yet")
}
else {
    fs.mkdir(DfolderPath, (err) => {
        if (err) {
            console.error("Error...", err)
            return;
        }
        console.log("New Folder created successfully!")
    })
    fs.cp(SfolderPath, DfolderPath, { recursive: true, force: true, dereference:true }, (err) => {
        if (err) {
            console.error("Error...", err)
            return;
        }
        console.log("Copied successfully!")
    })
}
