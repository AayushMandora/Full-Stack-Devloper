let text={
    1:"Initializing Hacking",
    2:"Reading your Files",
    3:"Password files Detected",
    4:"Sending all passwords and personal files to server",
    5:"Cleaning up"
}

let element=(text)=>{
    let h2=document.createElement("h2");
    h2.innerHTML=text;
    document.body.append(h2);
}

let seconds=()=>Math.floor(Math.random()*7000);

async function message(mess){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(element(mess));
        },seconds());
    }) 
}

async function main(){
    let t=setInterval(()=>{
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
        }
        else
        {
            last.innerHTML=last.innerHTML+".";
        }
    },200);

    await message(text[1]);
    await message(text[2]);
    await message(text[3]);
    await message(text[4]);
    await message(text[5]);

    stopInterval(t);
}

main();