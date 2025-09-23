/*
6. Eventful Evening :
Bu biroz murakkabroq! EVENTS modulidan foydalanib sodda hodisa yuboruvchini yaratadigan Node.js dasturini yozing.
Hodisa yuboruvchi foydalanuvchidan yangi qator kirganda "dataRecieved" hodisasini chiqarishi kerak.
Kiritilgan ma'lumotlarni konsolga yozib chiqaradigan tinglovchi funksiyani yarating
*/
import EventEmitter from "node:events";
import readline from "node:readline";
const request = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const emitter = new EventEmitter()
        emitter.on("dataRecieved", (data) => {
        console.log("New data recieved:", data)
        })
function main() {
    const data = request.question("ENTER THE DATA:    ", (data) => {
    emitter.emit("dataRecieved",data)      
    request.close()
})
}
main()
