let expect = require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('calculator', function () {

    it('should return 5', function () {
        let calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).to.be.equal(5);
    });
    it('should return 10', function () {
        let calculator = createCalculator();
        calculator.add(5);
        calculator.add(5);
        expect(calculator.get()).to.be.equal(10);
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.add('test');
        calculator.add(5);
        expect(calculator.get()).to.be.NaN;
    });
    it('should return -20', function () {
        let calculator = createCalculator();
        calculator.add(-10);
        calculator.add(-5);
        calculator.add(-5);
        expect(calculator.get()).to.be.equal(-20);
    });
    it('should return 20', function () {
        let calculator = createCalculator();
        calculator.add(25);
        calculator.subtract(10);
        calculator.add(5);
        expect(calculator.get()).to.be.equal(20);
    });
    it('should return -1', function () {
        let calculator = createCalculator();
        calculator.add(-10);
        calculator.subtract(-6);
        calculator.add(3);
        expect(calculator.get()).to.be.equal(-1);
    });
    it('should return 25', function () {
        let calculator = createCalculator();
        calculator.add(20);
        calculator.add(15);
        calculator.subtract(10);
        expect(calculator.get()).to.be.equal(25);
    });
    it('should return -45', function () {
        let calculator = createCalculator();
        calculator.subtract(20);
        calculator.subtract(15);
        calculator.subtract(10);
        expect(calculator.get()).to.be.equal(-45);
    });
    it('should return 50', function () {
        let calculator = createCalculator();
        calculator.add(15);
        calculator.subtract(-15);
        calculator.add(20);
        expect(calculator.get()).to.be.equal(50);
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.add(15);
        calculator.subtract('test');
        calculator.add(20);
        expect(calculator.get()).to.be.NaN;
    });
    it('should return 1', function () {
        let calculator = createCalculator();
        calculator.add(1);
        expect(calculator.get()).to.be.equal(1);
    });
    it('should return -1', function () {
        let calculator = createCalculator();
        calculator.subtract(1);
        expect(calculator.get()).to.be.equal(-1);
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        calculator.subtract(-1);
        expect(calculator.get()).to.be.equal(1);
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.be.equal(0);
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        calculator.add(0);
        expect(calculator.get()).to.be.equal(0);
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        calculator.subtract(0);
        expect(calculator.get()).to.be.equal(0);
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        calculator.subtract([]);
        expect(calculator.get()).to.be.equal(0);
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.subtract([1, 2, 3]);
        expect(calculator.get()).to.be.NaN;
    });
    it('should return 0', function () {
        let calculator = createCalculator();
        calculator.add([]);
        expect(calculator.get()).to.be.equal(0);
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.add([1, 2, 3]);
        expect(calculator.get()).to.be.NaN;
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.add(['test']);
        expect(calculator.get()).to.be.NaN;
    });
    it('should return NaN', function () {
        let calculator = createCalculator();
        calculator.subtract(['test']);
        expect(calculator.get()).to.be.NaN;
    });

});