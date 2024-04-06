class rabbit{
    constructor(name){
        this.name=name;
        console.log(this.name);
    }    
    static eat(){
        console.log("I am eating carrot");
    }
    jump(){
        console.log("I do jump");
    }
}
let r=new rabbit("rob");
// r.eat(); This shows Error
rabbit.eat();  