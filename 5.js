/*
5. Yo'l Topuvchi Pro:
PATH modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
Joriy ishchi katalogning absolyut yo'lini oling.
"docs" deb nomlangan ichki katalog ichida "readme.md" deb nomlangan yangi faylga nisbatan nisbiy yo'lni yarating. 
(Masalan, "./docs/readme.md")
Bonus: "docs" katalogi mavjudligini tekshiring. Agar mavjud bo'lmasa, "readme.md" yaratishdan oldin uni yarating.
*/
import fs, { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const folderPath = path.resolve(__dirname, "doc")
const filePath = path.resolve(folderPath,"readme.md")
if(existsSync(folderPath) && existsSync(filePath)){
    console.log("The folder and file already exist")   
}
// ASYNCHRONOUS VERSION 1
else{
    fs.mkdir(folderPath, {recursive:true},(err)=>{
        if(err){
            console.error("Error", err)
            return;
        }
            console.log("Folder created successfully ASYNCHRONICALLY")
    })
    fs.writeFile(filePath, "Hello world!", (err)=>{
        if(err){
            console.error("Error", err)
            return;
        }
        console.log("File created successfully ASYNCHRONICALLY")  
    })
}

//SYNCHRONOUS VERSION 2:
if(existsSync(folderPath) && existsSync(filePath)){
    console.log("The folder and file already exist")   
}
else{
    try{
    fs.mkdirSync(folderPath, {recursive:true})
    console.log("Folder created successfully SYNCHRONICALLY")
}catch(err){
    console.error("Error creating a  new folder", err)
}
    try{
    fs.writeFileSync(filePath, "Hello, world!")
    console.log("File created successfully SYNCHRONICALLY")
}catch(err){
    console.error("Error creating a  new file", err)
}
}
