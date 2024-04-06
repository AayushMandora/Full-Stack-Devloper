document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("I am Child");
});

document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("I am container Child");
});

document.querySelector(".container").addEventListener("click",(e)=>{
    alert("I am Container");
});