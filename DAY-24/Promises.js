let prom1=new Promise((resolve,reject)=>{
    let random=Math.random();
    if(random<0.50){
        reject("Error 1");
    }
    else{
    setTimeout(()=>{
        console.log("This is promise 1");
        resolve("Aayush");
    },1000)}
});

let prom2=new Promise((resolve,reject)=>{
    let random=Math.random();
    if(random<0.50){
        reject("Error 2");
    }
    else{
    setTimeout(()=>{
        console.log("This is promise 2");
        resolve("Aayush");
    },2000)}
});

let prom3=new Promise((resolve,reject)=>{
    let random=Math.random();
    if(random<0.50){
        reject("Error 3");
    }
    else{
    setTimeout(()=>{
        console.log("This is promise 3");
        resolve("Aayush");
    },1000)}
});

// Promise APIs

// let prom=Promise.all([prom1,prom2,prom3]);
// let prom=Promise.race([prom1,prom2,prom3]);
let prom=Promise.allSettled([prom1,prom2,prom3]);
prom.then((e)=>{
    console.log(e);
}).catch((err)=>{
    console.log(err);   
})

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })