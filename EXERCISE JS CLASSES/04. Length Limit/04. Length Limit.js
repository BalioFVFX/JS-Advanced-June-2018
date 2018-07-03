class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
        this.originalStr = str;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength <= 0) {
            this.innerString = '...';
            this.innerLength = 0;
        }
        else {
            this.innerString = this.originalStr.substring(0, this.innerLength);
        }
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength <= 0) {
            this.innerString = '...';
            this.innerLength = 0;
        }
        else {
            this.innerString = this.originalStr.substring(0, this.innerLength);
        }


    }

    toString() {
        if (this.innerString === this.originalStr) {
            return this.innerString;
        }
        if (this.innerLength === 0) {
            return this.innerString;
        }
        return this.innerString + '...';

    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test