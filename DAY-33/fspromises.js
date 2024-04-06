// const fs=require("fs/promises");
import fs from "fs/promises"
let a=await fs.readFile("./DAY-33/Aayush2.txt")
console.log(a.toString());