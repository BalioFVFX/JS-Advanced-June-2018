let expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sum function" , function () {
    it('should return 3 from [1,2]', function () {
        let test = [1,2];
        let result = sum(test);
        expect(result).to.be.equal(3);
    });

    it('should return 0 from []', function () {
        expect(sum([])).to.be.equal(0);
    });

    it('should return -10 from [-5,-5]', function () {
        let test = [-5,-5];
        let result = sum(test);
        expect(result).to.be.equal(-10);
    });
    it('should return NaN from [test, 10]', function () {
        let test = ['test', 10];
        let result = sum(test);
        expect(result).to.be.NaN;
    });
});