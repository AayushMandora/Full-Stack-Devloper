// This class have all methods of animal class
class lion extends animal{
    constructor(name){
        super(name);
        console.log("This extended class");
    }
    king(){
        console.log("I am king of jungle");
    }
}

let l=new lion("Seru");

l instanceof animal; // true
l instanceof lion; // true
a instanceof lion; // false