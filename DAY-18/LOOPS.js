// For Loop
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
// For In Loop
let obj={
    name: "Aayush",
    Course: "Full Stack Web Dev"
}
for (const key in obj) {
    console.log(key+" : "+obj[key]);
}
// For Of Loop
for (const char of "Aayush") {
    console.log(char);
}
// While Loop
let i=1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Do While
do{
    console.log(i);
    i++;
}while(i<=10);