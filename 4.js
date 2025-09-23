/*
4. Operatsion Tizim Odiseyasi:
OS modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
Dasturni ishga tushirgan kompyuteringizning host nomini oling.
Hozirgi foydalanuvchining foydalanuvchi nomini oling.
BONUS
Bu ikki ma'lumotni foydalanuvchiga do'stona formatda konsolga chiqaring (masalan, "Hostname: [hostname], Username: [username]")
*/
import os from "node:os"
const hostname = os.hostname()
const username = os.userInfo().username
console.log(`HOSTNAME: ${hostname}, Username: ${username}`)