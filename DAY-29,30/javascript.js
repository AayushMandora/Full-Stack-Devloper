function addcard(title){
    let cardinfo=`<div class="songcard cursor">
        <img class="songimg" src="./images/songimg.jpg" alt="">
        <div class="playbtn"><img src="./images/playbtn.svg" alt=""></div>
        <h3 class="songtitle">${title}</h3>
        <p class="songdisc">The perfect soundtrack to those long nights over dinner</p>
        </div>`;
    document.getElementById("cards").innerHTML=document.getElementById("cards").innerHTML +cardinfo;
}
async function getsongs(){
    let a=await fetch("http://127.0.0.1:5500/DAY-29,30/songs/");
    let response=await a.text();
    let div=document.createElement("div");
    div.innerHTML=response;
    let as=div.getElementsByTagName("a");
    let songs=[];
    for (let index = 4; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3"));
        {
            songs.push(element.href);
            addcard(element.href.slice(40));
        }
    }
    return(songs);
}
async function main(){
    let songs=await getsongs();
    console.log(songs);
    index=0;
    let audio=new Audio(songs[index]);

    let pplay=document.getElementById("pbtn");
    pplay.addEventListener("click",()=>{
        audio.pause();
        index--;
        audio=new Audio(songs[index]);
        audio.play();

    });

    let play=document.getElementById("playbtn");
    play.addEventListener("click",()=>{
        audio.pause();
        audio.play();
    });
    play.addEventListener("dblclick",()=>{
        audio.pause();
    });

    let nplay=document.getElementById("nbtn");
    nplay.addEventListener("click",()=>{
        audio.pause();
        index++;
        audio=new Audio(songs[index]);
        audio.play();
    });
}

main();