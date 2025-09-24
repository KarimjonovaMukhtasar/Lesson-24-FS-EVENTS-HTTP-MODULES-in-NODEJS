/*
14. delete.js - fileToRemove.txt nomli faylni o'chiring.
 Agar fileToRemove.txt fayli topilmasa, "FS operation failed" xabari bilan xato tashlashingiz kerak.
*/
import fs, { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const deleteFile = path.join(__dirname, "delete.js")
if ( !existsSync(deleteFile)) {
    console.log("FS operation failed! The deleting file doesn't exist!")
}
else {
    fs.unlink(deleteFile, (err) => {
        if (err) {
            console.error("Error...", err)
            return;
        }
        console.log("Deleting file has been removed successfully!")
    })
}
