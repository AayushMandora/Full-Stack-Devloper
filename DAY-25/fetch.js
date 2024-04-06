async function getdata(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    // let data = await x.text();
    return data;
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