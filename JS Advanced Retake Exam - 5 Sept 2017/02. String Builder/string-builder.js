let expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

describe('initialization', function () {
    it('should throw error for non-string', function () {

        function test() {
            let str = new StringBuilder(2);
        }

        expect(test).throw();
    });
    it('should return correct result', function () {
        let str = new StringBuilder('Test');
        expect(Object.getPrototypeOf(str).hasOwnProperty('append')).to.be.equal(true);
        expect(Object.getPrototypeOf(str).hasOwnProperty('prepend')).to.be.equal(true);
        expect(Object.getPrototypeOf(str).hasOwnProperty('insertAt')).to.be.equal(true);
        expect(Object.getPrototypeOf(str).hasOwnProperty('remove')).to.be.equal(true);
        expect(Object.getPrototypeOf(str).hasOwnProperty('toString')).to.be.equal(true);

    });


    it('should return Test for init', function () {
        let str = new StringBuilder('Test');
        expect(str.toString()).to.be.equal('Test');
    });
    it('should return empty string for empty constructor for init', function () {
        let str = new StringBuilder();
        expect(str.toString()).to.be.equal('');
    });
    it('should return correct result', function () {
        let str = new StringBuilder('Test');
        expect(str._stringArray.length).to.be.equal(4);
    });

});


describe('append', function () {
    it('should return error ', function () {
        let str = new StringBuilder('Test');

        function test() {
            str.append(2);
        }

        expect(test).to.throw();
    });

    it('should return correct result', function () {
        let str = new StringBuilder('Test');
        str.append('2nd');
        expect(str.toString()).to.be.equal('Test2nd');
    });

    it('should return correct length', function () {
        let str = new StringBuilder('Test');
        str.append('2nd');
        expect(str._stringArray.length).to.be.equal(7);
    });
});

describe('prepend', function () {
    it('should return error for non-string proprety', function () {
        let str = new StringBuilder('Test');

        function test() {
            str.prepend(2);
        }

        expect(test).to.throw();
    });

    it('should return correct value length', function () {
        let str = new StringBuilder('Test');
        str.prepend('2nd');
        expect(str.toString()).to.be.equal('2ndTest');
    });

    it('should return correct value length', function () {
        let str = new StringBuilder('Test');
        str.prepend('2nd');
        expect(str._stringArray.length).to.be.equal(7);
    });
});

describe('insertAt', function () {
    it('should return error for non-string property', function () {
        let str = new StringBuilder('Test');

        function test() {
            str.insertAt(1, 2);
        }

        expect(test).to.throw();
    });

    it('should return correct value for inserting', function () {
        let str = new StringBuilder('Test');
        str.insertAt('2nd', 4);
        expect(str.toString()).to.be.equal('Test2nd');
    });

    it('should return correct length for inserting', function () {
        let str = new StringBuilder('Test');
        str.insertAt('2nd', 4);
        expect(str._stringArray.length).to.be.equal(7);
    });
});

describe('remove', function () {
    it('should return correct value for removing', function () {
        let str = new StringBuilder('Test');
        str.remove(2, 4);
        expect(str.toString()).to.be.equal('Te')
    });
    it('should return correct length for removing', function () {
        let str = new StringBuilder('Test');
        str.remove(2, 4);
        expect(str._stringArray.length).to.be.equal(2);
    });
});
