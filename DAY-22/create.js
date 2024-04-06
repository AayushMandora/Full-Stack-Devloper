// Create Element div
let div= document.createElement("div");
div.innerHTML="hello";
div.setAttribute("class","created");

// add element to container
document.querySelector(".container").prepend(div);
document.querySelector(".container").append(div);
document.querySelector(".container").before(div);
document.querySelector(".container").after(div);

// using adjacet
let cont=document.querySelector(".container");

cont.insertAdjacentElement("afterbegin",div);
cont.insertAdjacentElement("beforebegin",div);

// REMOVE 
document.querySelector(".box").remove();
document.querySelector(".box").remove();

// class list
document.querySelector(".container").classList;
document.querySelector(".container").className;
document.querySelector(".container").classList.add('green');
document.querySelector(".container").classList.remove('green');
document.querySelector(".container").classList.toggle('green');