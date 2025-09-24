/*
. rename.js - wrongFilename.txt nomli faylni properFilename.md deb qayta nomlang. 
Agar wrongFilename.txt fayli topilmasa yoki properFilename.md allaqachon mavjud
bo'lsa, "FS operation failed" xabari bilan xato tashlashingiz kerak.
*/
import fs, { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const oldName = path.join(__dirname, "wrongFilename.txt")
const newName = path.join(__dirname, "properFilename.md")
if (existsSync(newName) || !existsSync(oldName)) {
    console.log("FS operation failed! The new Name file already exists! or The old Name file doesn't exist yet")
}
else {
    fs.rename(oldName, newName, (err) => {
        if (err) {
            console.error("Error...", err)
            return;
        }
        console.log("OLD filename has been renamed successfully!")
    })
}
