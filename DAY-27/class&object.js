// animal is parent class for lion class
class animal{
    constructor(name){
        this.name=name;
        console.log(this.name);
    }    
    eat(){
        console.log("I am eating");
    }   
    run(){
        console.log("I am running");
    }
    jump(){
        console.log("I do jump");
    }
}
let a=new animal("Rabbit");
console.log(a);