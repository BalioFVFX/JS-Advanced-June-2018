function solution() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this.elementIndex;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        };
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.elements = ['Fire', 'Earth', 'Air'];
        }

        morph() {
            this.elements.push(this.element);
            this.element = this.elements.shift();
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let classes = solution();

let Melon = classes.Melon;
let Watermelon = classes.Watermelon;
let Melolemonmelon = classes.Melolemonmelon;
let melolemonmelonA = new Melolemonmelon(9, 'Normal');
let watermelonA = new Watermelon(12.5, "Kingsize");
console.log(watermelonA.toString());
console.log('-------------------------------------');
console.log(melolemonmelonA.toString());
melolemonmelonA.morph();
console.log(melolemonmelonA.toString());
melolemonmelonA.morph();
console.log(melolemonmelonA.toString());
melolemonmelonA.morph();
console.log(melolemonmelonA.toString());
melolemonmelonA.morph();
console.log(melolemonmelonA.toString());
melolemonmelonA.morph();
console.log(melolemonmelonA.toString());