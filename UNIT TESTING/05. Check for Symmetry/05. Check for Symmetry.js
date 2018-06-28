let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('symmetric function', function () {

    it('should return true', function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['test', 2, 'test'])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['G', 1, 2, 'a', 'a', 2, 1, 'G'])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([3, 'c', 'b', 'b', 'c', 3])).to.be.equal(true);
    });
    it('should return false', function () {
        expect(isSymmetric([1, 2, 2])).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric(['a', 2, 'b'])).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric([1, 'b', 'c', 2, 1])).to.be.equal(false);
    });
    it('should return true', function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['test', 2, 'test'])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([3, 'c', 'b', 'b', 'c', 3])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['test'])).to.be.equal(true);
    });
    it('should return false', function () {
        expect(isSymmetric('test')).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric([1, 2, 2])).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric(['a', 2, 'b'])).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric(1)).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric(['G', 'test', 1, 'c', 'G', 1, 'test', 'G'])).to.be.equal(false);
    });
    it('should return true', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([-1, -2, -3, -2, -1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric([1,2,3,4,3,2,1])).to.be.equal(true);
    });
    it('should return true', function () {
        expect(isSymmetric(['G', 'L', 'T', 'Q', 'T', 'L', 'G'])).to.be.equal(true);
    });
    it('should return false', function () {
        expect(isSymmetric([1,2,3,4,3,3,1])).to.be.equal(false);
    });
    it('should return false', function () {
        expect(isSymmetric(['G', 'L', 'T', 'Q', 'T', 'T', 'G'])).to.be.equal(false);
    });
    it('should return true', function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it('should return false', function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false);
    });

});