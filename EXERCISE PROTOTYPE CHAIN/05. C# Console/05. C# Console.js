let expect = require('chai').expect;

class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
};

describe('writeLine string tests', function () {
    it('should return Test', function () {
        expect(Console.writeLine('Test')).to.be.equal('Test');
    });
    it('should return 1', function () {
        expect(Console.writeLine('1')).to.be.equal('1');
    });
    it('should return {1}', function () {
        expect(Console.writeLine('{1}')).to.be.equal('{1}');
    });

});

describe('writeLine object tests', function () {
    it('should return {"name":"Test"}', function () {
        let result = {name: 'Test'};
        result = JSON.stringify(result);
        expect(Console.writeLine({name: 'Test'})).to.be.equal(result);
    });
    it('should return {"name":"Test","age":19}', function () {
        let result = {name: 'Test', age: 19};
        result = JSON.stringify(result);
        expect(Console.writeLine({name: 'Test', age: 19})).to.be.equal(result);
    });
    it('should return {"name":"Test","innerObj":{"innerName":"inner Test"}}', function () {
        let result = {name: 'Test', innerObj: {innerName: 'inner Test'}};
        result = JSON.stringify(result);
        expect(Console.writeLine({name: 'Test', innerObj: {innerName: 'inner Test'}})).to.be.equal(result);
    });
    it('should return {}', function () {
        let result = {};
        result = JSON.stringify(result);
        expect(Console.writeLine({})).to.be.equal(result);
    });

});

describe('Multiple parameters, first not string', function () {
    it('should throw TypeError', function () {
        function test() {
            Console.writeLine(1, 1)
        }

        expect(test).to.throw(TypeError);
    });
    it('should throw TypeError', function () {
        function test() {
            Console.writeLine({}, 1)
        }

        expect(test).to.throw(TypeError);
    });
});

describe('If the number of parameters does not correspond to the number of placeholder', function () {
    it('should return RangeError for one placeholder and 3 parameters', function () {
        function test() {
            Console.writeLine('{0}', 0, 1, 2);
        }

        expect(test).to.throw(RangeError);
    });
});

describe('If the placeholders have indexes not withing the parameters range', function () {
    it('should return RangeError for {10} and 1', function () {
        function test() {
            Console.writeLine('{10}', 1);
        }

        expect(test).to.throw(RangeError);
    });
});

describe('Valid template tests', function () {
    it('should return The sum of 3 and 4 is 7', function () {
        expect(Console.writeLine('The sum of {0} and {1} is {2}', 3, 4, 7)).to.be.equal('The sum of 3 and 4 is 7');
    });
    it('should return Insert the text here #Text to insert#', function () {
        expect(Console.writeLine('Insert the text here #{0}#', 'Text to insert')).to.be.equal('Insert the text here #Text to insert#');
    });
    it('should return Text 1', function () {
        expect(Console.writeLine('{0} {1}', 'Text', 1)).to.be.equal('Text 1');
    });
    it('should return 1', function () {
        expect(Console.writeLine('{0}', 1)).to.be.equal('1');
    });
    it('should return 1 2', function () {
        expect(Console.writeLine('{1} {0}', 2, 1)).to.be.equal('1 2');
    });
    it('should return [object Object]', function () {
        expect(Console.writeLine('{0}', {test: 'Test'})).to.be.equal('[object Object]');
    });
});