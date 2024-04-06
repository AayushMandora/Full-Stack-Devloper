// map , reduce , filters important for Array

let arr=[1,2,3,4,5];

/* map create new array by peforming 
some operation on each array element.*/
let newarr=arr.map((value)=>{
    return value**2;
});
console.log(newarr);

/* Filters an array with values that 
passes a test Creates a new array*/
const gt3=(e)=>{
    if(e>3){
        return true;
    }
    return false;
}
console.log(arr.filter(gt3));

// Reduce 
const sum=(a,b)=>{
    return a+b;
}
console.log(arr.reduce(sum));