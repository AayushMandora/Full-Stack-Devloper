console.log(prompt("enter name"));
var ans=confirm("Ready for learning JS");

// variable name cannot start with number
// variable name are Case Sensitive

let a=5; 
// a=a+1;
let b=6;
var c='Aayush'; // var have global level scope

// var 1a1=123; Not allowed

console.log(a+b);
console.log(c);
console.log(typeof a,typeof c);

{
    let d=7; // let have block level scope
    console.log(a);
}
console.log(d); // This show error because d have block level scope

const pi=3.14;
// you cannot change const variable value
// pi=3.15; Not allowed