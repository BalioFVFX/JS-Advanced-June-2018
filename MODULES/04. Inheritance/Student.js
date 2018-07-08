let Person = require('./person.js');

class Student extends Person {
    constructor(name, pharse, dog, id) {
        super(name, pharse, dog);
        this.id = id;
    }

    saySomething() {
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.saySomething()}`;
    }
}

module.exports = Student;