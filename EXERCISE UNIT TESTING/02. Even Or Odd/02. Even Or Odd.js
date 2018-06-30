let expect = require('chai').expect;
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("Even or Odd function", function () {
    it('should return undefined', function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(isOddOrEven(function() {})).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(isOddOrEven({})).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
    it('should return even', function () {
        expect(isOddOrEven("")).to.be.equal("even");
    });
    it('should return odd', function () {
        expect(isOddOrEven("1")).to.be.equal("odd");
    });
    it('should return even', function () {
        expect(isOddOrEven("12")).to.be.equal("even");
    });
    it('should return odd', function () {
        expect(isOddOrEven("123")).to.be.equal("odd");
    });
    it('should return even', function () {
        expect(isOddOrEven("123456")).to.be.equal("even");
    });
    it('should return odd', function () {
        expect(isOddOrEven("1234567")).to.be.equal("odd");
    });
});