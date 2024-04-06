let cm=["ROCK","PAPER","SCISSOR"];

function move(){
    return Math.floor(Math.random()*3);
}

let result=document.getElementById("win");

function win(name){
    let m=move();
    let comm=cm[m];

    document.getElementById("pm").innerHTML=`Player move : ${name.innerHTML}`;
    document.getElementById("cm").innerHTML=`Computers move : ${comm}`;
    
    if(name.innerHTML == comm){
        result.innerHTML="TIE";
    } 
    if(name.innerHTML == "ROCK" && comm == "PAPER" || name.innerHTML == "SCISSOR" && comm=="ROCK" || name.innerHTML == "PAPER" && comm=="SCISSOR"){
        result.innerHTML="YOU LOSE GAME"
    }
    if(name.innerHTML == "PAPER" && comm == "ROCK" || name.innerHTML == "ROCK" && comm=="SCISSOR" || name.innerHTML == "SCISSOR" && comm=="PAPER"){
        result.innerHTML="YOU WIN GAME"
    }
}