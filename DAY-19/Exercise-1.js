console.log("faulty calculator");

let random=Math.random()
console.log(random);

let faulty={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

let a=prompt("Enter value of A: ");
let b=prompt("Enter value of B: ");
let c=prompt("Enter operation: ");

if(random > 0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    let d=faulty[c];
    alert(`the result is ${eval(`${a} ${d} ${b}`)}`);
}