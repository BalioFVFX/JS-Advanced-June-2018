class Person{
    constructor(name){
        this.name = name;
    }
    toString(){
        return `I'm ${this.name}`;
    }
}
let a = new Person("Pesho");
module.exports = Person;