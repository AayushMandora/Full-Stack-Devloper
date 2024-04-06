async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },3000)
    })
}
async function main(){
    console.log("Data fetch");
    console.log("Data coming");
    console.log("Load data");

    let data= await getdata();
    console.log(data);

    console.log("Process Data 1");
    console.log("Process Data 2");
    console.log("Process Data 3");
}
main();