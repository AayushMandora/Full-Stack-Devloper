function createcard(title,cname,views,old,duration,thumbnail){
    let card=document.createElement("div");
    card.setAttribute("class","card");

    let image=document.createElement("div");
    image.setAttribute("class","image");

    let img=document.createElement("img");
    img.setAttribute("src",thumbnail);

    let time=document.createElement("div");
    time.setAttribute("class","time");
    time.innerHTML=duration;

    image.append(img,time);

    let right=document.createElement("div");
    right.setAttribute("class","right");

    let h2=document.createElement("h2");
    h2.setAttribute("class","h2");
    h2.innerHTML=title

    let detailes=document.createElement("div");
    detailes.setAttribute("class","detailes");

    let ul=document.createElement("ul");
    let li1=document.createElement("li");
    li1.innerHTML=cname;
    let li2=document.createElement("li");
    li2.innerHTML=views
    let li3=document.createElement("li");
    li3.innerHTML=old;

    ul.append(li1,li2,li3);
    detailes.append(ul);
    right.append(h2,detailes);

    card.append(image,right);

    document.querySelector(".container").append(card);
}

createcard("This is video 1","CodeWithHarry","1M","2 Months Ago","39:20","thumbnail.jpg");
createcard("This is video 2","CodeWithHarry","1M","2 Months Ago","20:54","thumbnail.jpg");
createcard("This is video 3","CodeWithHarry","1M","2 Months Ago","30:00","thumbnail.jpg");
createcard("This is video 4","CodeWithHarry","1M","2 Months Ago","12:00","thumbnail.jpg");
createcard("This is video 5","CodeWithHarry","1M","2 Months Ago","24:43","thumbnail.jpg");