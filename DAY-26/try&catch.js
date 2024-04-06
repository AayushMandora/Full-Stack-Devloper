let a=prompt("Enter number");
let b=prompt("Enter number");

let sum=parseInt(a)+parseInt(b);

// throw error
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid Input");
}

let x=5;
function main(){
    try{
        console.log("Sum is : ", sum * x);
        return;
    }
    catch(error){
        console.log("Error Hai Bhai");
        console.log(error);
    }
    finally{
        console.log("All resources relesed");
    }
}
main();