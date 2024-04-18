"use server"
import fs from "fs/promises"

export const submitAction=async(e)=>{
    console.log(e.get("name")+" "+e.get("pass"));
    fs.writeFile("Userdetailes.txt",`Name is : ${e.get("name")} Pass is : ${e.get("pass")}`);
}