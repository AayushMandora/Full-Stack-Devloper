function greet(name){
    console.log("Hello " +name);
    console.log("Coder... " +name);
}
greet("Aayush");
greet("Aafi");

function sum(a,b,c=10){
    return a+b+c;
}

console.log(sum(3,3));
console.log(sum(5,5));
console.log(sum(5,5,5));

const fun1=(x)=>{
    console.log("Number is : "+x);
}
fun1(10);
fun1(20);