let Extensible = (function () {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let key in template) {
                if (typeof(template[key]) === "function") {
                    this['__proto__'][key] = template[key];
                    continue;
                }
                this[key] = template[key];
            }
        }
    }
}());

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);