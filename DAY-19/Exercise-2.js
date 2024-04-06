// Business Name generator
let Adjectives={
    0:"Crazy",
    1:"Amazing",
    2:"Fire"
}
let shop_name={
    0:"Engine",
    1:"Foods",
    2:"Garments"
}
let Another_word={
    0:"Bros",
    1:"Limited",
    2:"Hub"
}

let first=Adjectives[Math.floor(Math.random() * 3)];
let shop=shop_name[Math.floor(Math.random() * 3)];
let word=Another_word[Math.floor(Math.random() * 3)];

console.log(first.concat(shop,word));