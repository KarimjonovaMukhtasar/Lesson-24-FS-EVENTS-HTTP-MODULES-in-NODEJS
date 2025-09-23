/*
3. Fayl Tizimi Bilan O'yin:
FS modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
"my_nodejs_files" deb nomlangan yangi katalog yarating.
"my_nodejs_files" ichida "hello_world.txt" deb nomlangan matnli fayl yarating, ichida "Hello, world!" deb yozilgan bo'lsin.
"hello_world.txt" faylining tarkibini o'qib, uni konsolga chiqaring.
Bonus: "hello_world.txt" fayliga hozirgi sana va vaqtni yangi qator sifatida qo'shing.
*/
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

//ASYNCHROUNOUS VERSION 1:
function NodeJS() {
    let __dirname = path.dirname(fileURLToPath(import.meta.url))
    let currentPath = path.join(__dirname, "my_nodejs_files")
    fs.mkdir(currentPath, { recursive: true }, (err) => {
        if (err) {
            console.error("Failed to create a new folder")
            return;
        }
        console.log("Folder created successfully")
    })
    let filePath = path.join(currentPath, "hello_world.txt")
    fs.writeFile(filePath, "Hello, world!", (err) => {
        if (err) {
            console.error("Error to write a file", err)
            return;
        }
        console.log("Successfully Written to the file")
    })
    let now = new Date()
    let content = now.toISOString().replace("T", " ").slice(0, 19)
    fs.appendFile(filePath, `\n${content}`, (err) => {
        if (err) {
            console.error("Error to write a file", err)
            return;
        }
        console.log("Successfully Written to the file")
    })
    fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
        if (err) {
            console.error("Error to read a file", err)
            return;
        }
        console.log("Successfully READ the file, data:", data)
    })
}

//SYNCHROUNOUS VERSION 2:
function NodeJSSync() {
    //NEW FOLDER CREATION
    let __dirname = path.dirname(fileURLToPath(import.meta.url))
    let currentPath = path.join(__dirname, "my_nodejs_files")
    try{
        fs.mkdirSync(currentPath,{recursive:true})
        console.log("Folder created synchronically")
    }
    catch(err){
        console.error("Error to create a folder synchronically", err.message)
    }

    //NEW FILE CREATION & with some info in it
    let filePath = path.join(currentPath, "hello_world.txt")
    try{
    fs.writeFileSync(filePath, "Hello, world!")
    console.log("Successfully Written to the file SYNCHRONICALLY")
    }catch(err){
        console.error("Error to write a file", err)
    }
    
    // adding date to the existed file
    let now = new Date()
    let content = now.toISOString().replace("T", " ").slice(0, 19)
    try{
        fs.appendFileSync(filePath, `\n${content}`)
        console.log("Successfully Written to the file SYNCHRONICALLY")
    }
    catch(err){
        console.error("Error to write a file", err)
    }
    // READING THE DATA IN FILE AND SHOWING IN CONSOLE:
    try{ 
        const data = fs.readFileSync(filePath, { encoding: "utf8" })
        console.log("Successfully READ the file SYNCHRONICALLY, data:", data)}
        catch(err){
            console.error("Error to read a file", err)
        }}
NodeJS()
NodeJSSync()