const fn=()=>{
    console.log("Nothing")
}

const callback=(arg,fn)=>{
    console.log(arg);
    fn();
}

const load=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Script loaded",fn);
    document.head.append(sc);
}

load("Promises.js",callback);