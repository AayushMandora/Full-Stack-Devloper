let arr=[1,2,3,4,5];
// index 0,1,2,3,4

console.log(arr);
console.log(arr.length);
console.log(arr[2]);

arr[0]=0;
console.log(arr);

// Arrays Methods
console.log(arr.toString());
console.log(arr.join(" - "));

// Array push(add element),pop(remove element)
console.log(arr.pop(),arr,arr.length);
console.log(arr.push(5),arr,arr.length);
console.log(arr.push("Aayush"),arr,arr.length);

// Array Shift remove element from left
// Aarray Unshift add element to left
console.log(arr.shift(),arr,arr.length);
console.log(arr.unshift(1),arr,arr.length);

// Array concat merge Two or more Arrays
// Concat method does't change existing array
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
console.log(arr1.concat(arr2,arr3));

// Array short
let array=[3,2,5,7,85,1,6];
console.log(array.sort());

// Array Splice
arr.splice(1,3);
console.log(arr);
arr.splice(1,3,4,9);
console.log(arr);

// Array slice
console.log(arr.slice(3));
console.log(arr.slice(3,5));
console.log(arr);