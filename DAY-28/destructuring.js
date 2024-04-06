let arr=[1,2,3,4,5];

// let x,y=[1,2];
// console.log(x,y);
let [x,y,...rest]=[1,2,7,6,8,4];
console.log(x,y,rest);

let obj={a:6,b:7,c:8,d:9};
let {a,b,...more}=obj;
console.log(a,b,more);