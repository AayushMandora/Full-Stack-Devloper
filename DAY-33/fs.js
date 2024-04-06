const fs=require('fs');

// console.log(fs);

console.log("Start")

// fs.writeFile("./DAY-33/Aayush2.txt","Hello this is second file",()=>{
//     console.log("done");
// })

fs.writeFile("./DAY-33/Aayush2.txt","Hello this is second file",()=>{
    console.log("done")
    fs.readFile("./DAY-33/Aayush2.txt",(error,data)=>{
        console.log(error,data);
    })
})

fs.appendFile("./DAY-33/Aayush2.txt","Pro Coders...",(e,d)=>{
    console.log(e,d);
})
fs.readFile("./DAY-33/Aayush2.txt",(e,d)=>{
    console.log(d.toString());
})
// fs.writeFileSync("./DAY-33/Aayush.txt","Hello Coders... How are you")
console.log("Finished")