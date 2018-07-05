function extendClass(classToExtend) {
    let species = 'Human';
    let toSpeciesString = function () {
        return `I am a ${species}. ${this.toString()}`
    };
    classToExtend.prototype.species = species;
    classToExtend.prototype.toSpeciesString = toSpeciesString;
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

extendClass(Person);

let personA = new Person("Pesho", "pesho@gmail.com");

console.log(personA.toSpeciesString);