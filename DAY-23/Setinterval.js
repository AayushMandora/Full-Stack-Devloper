function  random(){
    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);
    color="rgb("+r+","+g+","+b+")";
    return color;
}  

// This set random text color after every 0.5 milisecond
setInterval(() => {
    document.getElementById("text").style.color=random();
}, 500);

// This set Random backgroundcolor to button after 2 second
setTimeout(()=>{
    document.getElementById("btn").style.backgroundColor=random();
},2000)