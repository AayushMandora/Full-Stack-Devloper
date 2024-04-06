async function iife(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },2000)
    })
}
// IIFE function runs as soon as it is define
(async function main(){
    let a=await iife();
    console.log(a);
    let b=await iife();
    console.log(b);
}
)();