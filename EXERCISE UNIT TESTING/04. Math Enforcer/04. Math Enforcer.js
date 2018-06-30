let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer function unit tests", function () {
    it('should return undefined', function () {
        expect(mathEnforcer.addFive("")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.subtractTen("")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.sum("", "")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.sum(1, "")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.sum("", 1)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.sum("")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(mathEnforcer.sum("", "")).to.be.equal(undefined);
    });


    it('should return 5', function () {
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
    });
    it('should return -5', function () {
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
    });
    it('should return 5.9', function () {
        expect(mathEnforcer.addFive(0.9)).to.be.equal(5.9);
    });


    it('should return 10', function () {
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
    });
    it('should return -12', function () {
        expect(mathEnforcer.subtractTen(-2)).to.be.equal(-12);
    });
    it('should return 0.5', function () {
        expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
    });



    it('should return 10', function () {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
    });
    it('should return -10', function () {
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
    });
    it('should return 3', function () {
        expect(mathEnforcer.sum(1.5, 1.5)).to.be.equal(3);
    });
    it('should return 2.46', function () {
        expect(mathEnforcer.sum(1.23, 1.23)).to.be.equal(2.46);
    });

});