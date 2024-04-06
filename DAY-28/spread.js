function sum(a,b,c){
    return a+b+c;
}

let A=[1,2,3];
// console.log(A[0]+A[1]+A[2]);
console.log(sum(...A)); //This spreads Array values
const obj1={...A}
console.log(obj1);

const d="the",e="no"
const f={d,e};
console.log(f);