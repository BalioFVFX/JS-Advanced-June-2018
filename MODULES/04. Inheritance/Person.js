let Entity = require('./Entity.js');
class Person extends Entity {
    constructor(name, phrase, dog) {
        super(name);
        if (dog.constructor.name !== 'Dog') {
               throw new Error('Not a dog class');
        }
        this.phrase = phrase;
        this.dog = dog;
    }

    saySomething() {
        return `${this.name} says: ${this.phrase}${this.dog.saySomething()}`;
    }
}

module.exports = Person;