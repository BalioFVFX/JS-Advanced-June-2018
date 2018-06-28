let expect = require('chai').expect;
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('function', function () {
    it('should return #FFFFFF', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(-1, 255, 255)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(255, -1, 255)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(255, 255, -1)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(300, 255, 255)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(255, 300, 255)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(rgbToHexColor(255, 255, 300)).to.be.equal(undefined);
    });
    it('should return #6D97DB', function () {
        expect(rgbToHexColor(109, 151, 219)).to.be.equal('#6D97DB');
    });
    it('should return #000000', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('should return #020407', function () {
        expect(rgbToHexColor(2, 4, 7)).to.be.equal('#020407');
    });
    it('should return #09101c', function () {
        expect(rgbToHexColor(9, 16, 28)).to.be.equal('#09101C');
    });
    it('should return #004fce', function () {
        expect(rgbToHexColor(0, 79, 206)).to.be.equal('#004FCE');
    });
    it('should return #c7c9cc', function () {
        expect(rgbToHexColor(199, 201, 204)).to.be.equal('#C7C9CC');
    });
});