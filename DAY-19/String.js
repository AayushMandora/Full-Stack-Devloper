let Name="Aayush";
console.log(Name);
console.log(Name[3]);
console.log(Name[0]);

console.log(Name.length);
// Template Literals
console.log(`The name is ${Name}`);

// Escape Sequence
console.log("Aay\"ush");
console.log("\n\n\t"+Name);
// \n New line
// \t tab

// ToUpperCase & ToLowerCase
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.length);

// Slicing
console.log(Name.slice(1,4));
console.log(Name.slice(1));

// replace
console.log(Name.replace("Aa","A"));
console.log(Name.replace("a"," "));

// concat
let str="OP";
console.log(Name.concat(" Coder..."));
console.log(Name.concat(str));
console.log(Name.concat(str,"Coder..."));

// More
console.log(Name.charAt(1));
console.log(Name.indexOf("y"));
console.log(Name.endsWith("sh"));
console.log(Name.endsWith("yu"));