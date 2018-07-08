let Entity = require('./Entity.js');

class Dog extends Entity {
    constructor(name) {
        super(name);
    }

    saySomething() {
        return `${this.name} barks!`;
    }
}

module.exports = Dog;