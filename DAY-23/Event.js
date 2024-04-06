let button=document.getElementById("btn");
let h1=document.getElementById("text");
button.addEventListener("keypress",(e)=>{
    h1.innerHTML="Hello Pro Coders...";
    console.log(e);
});

function btn(){
    h1.innerHTML="Hello Pro Coders...";
}

// Some important DOM Events
/* 
Mouse Events
Keyboard Events
Documnet Events
*/

// Add EVENT by HTML
/* <Button id="btn" onclick="btn()">Click</Button> */

