console.log("Hello Today I start Backend");

var slugify = require('slugify')

let a=slugify('Hello world'); // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b=slugify('Hello world', '_') ; // some_string
console.log(b);

const c=slugify('Hello world How are you','_') ;
console.log(c);