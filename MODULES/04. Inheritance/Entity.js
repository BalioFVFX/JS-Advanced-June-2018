class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw TypeError('Abstract class initialization is not allowed');
        }
        this.name = name;
    }
}

module.exports = Entity;