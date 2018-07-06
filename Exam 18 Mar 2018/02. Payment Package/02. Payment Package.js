let expect = require('chai').expect;
class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe ("initialization", function () {
    it('should throw error for no value', function () {
        function test(){
            let object = new PaymentPackage("Test");
        }
        expect(test).to.throw(Error);
    });
    it('should return Test for name', function () {

            let object = new PaymentPackage("Test", 10);

        expect(object.name).to.be.equal("Test");
    });
    it('should return 10 for value', function () {

        let object = new PaymentPackage("Test", 10);

        expect(object.value).to.be.equal(10);
    });
});


describe("default values", function () {
    it('should return VAT 20', function () {
        let obj = new PaymentPackage("Valid", 10);
        expect(obj.VAT).to.be.equal(20);
    });
    it('should return active true', function () {
        let obj = new PaymentPackage("Valid", 10);
        expect(obj.active).to.be.equal(true);
    });
});

describe("set name", function () {
    it('should return error for non-string property', function () {
        let obj = new PaymentPackage("Test", 10);
        function test(){
            obj.name = 10;
        }
        expect(test).to.throw(Error);
    });
    it('should return error for empty string', function () {
        let obj = new PaymentPackage("Test", 10);
        function test(){
            obj.name = "";
        }
        expect(test).to.throw(Error);
    });
    it('should return change the string', function () {
        let obj = new PaymentPackage("Test", 10);
        obj.name = "Valid Test";
        expect(obj.name).to.be.equal("Valid Test");

    });
});

describe("set value", function () {
    it('should return error for string', function () {
        let obj = new PaymentPackage("Test", 10);
        function checkTest() {
            obj.value = "invalid";
        }
        expect(checkTest).to.throw(Error);
    });
    it('should return error for negative', function () {
        let obj = new PaymentPackage("Test", 10);
        function checkTest() {
            obj.value = -10;
        }
        expect(checkTest).to.throw(Error);
    });
    it('should return changed value', function () {
        let obj = new PaymentPackage("Test", 10);
        obj.value = 20;
        expect(obj.value).to.be.equal(20);
    });
    it('should return changed value', function () {
        let obj = new PaymentPackage("Test", 10);
        obj.value = 0;
        expect(obj.value).to.be.equal(0);
    });
});

describe("set VAT", function () {
    it('should return error for non-number VAT', function () {
        let obj = new PaymentPackage("Valid", 10);
        function test(){
            obj.VAT = "Test";
        }
        expect(test).to.throw(Error);
    });
    it('should return error for negative number', function () {
        let obj = new PaymentPackage("Valid", 10);
        function test(){
            obj.VAT = -10;
        }
        expect(test).to.throw(Error);
    });
    it('should change the vat', function () {
        let obj = new PaymentPackage("Valid", 10);
        obj.VAT = 50;
        expect(obj.VAT).to.be.equal(50);

    });
    it('should change the vat', function () {
        let obj = new PaymentPackage("Valid", 10);
        obj.VAT = 0;
        expect(obj.VAT).to.be.equal(0);

    });
});

describe("set active", function () {
    it('should return error for non-boolean active', function () {
        let obj = new PaymentPackage("Valid", 10);
        function test(){
            obj.active = "Test";
        }
        expect(test).to.throw(Error);
    });
    it('should return error for non-boolean active', function () {
        let obj = new PaymentPackage("Valid", 10);
        function test(){
            obj.active = 10;
        }
        expect(test).to.throw(Error);
    });
    it('should change active to true', function () {
        let obj = new PaymentPackage("Valid", 10);
        obj.active = true;
        expect(obj.active).to.equal(true);
    });
    it('should change active to false', function () {
        let obj = new PaymentPackage("Valid", 10);
        obj.active = false;
        expect(obj.active).to.equal(false);
    });
});

describe('toString', function () {
    it('should return name - Valid excl. VAT: 10 VAT 20% : 12. Package is valid', function () {
        let test = new PaymentPackage("Valid", 10);
        expect(test.toString()).to.be.equal('Package: Valid\n' +
            '- Value (excl. VAT): 10\n' +
            '- Value (VAT 20%): 12');
    });
    it('should return invalid package', function () {
        let test = new PaymentPackage("Valid", 10);
        test.active = false;
        expect(test.toString()).to.be.equal('Package: Valid (inactive)\n' +
            '- Value (excl. VAT): 10\n' +
            '- Value (VAT 20%): 12')
    });
    it('should return changed values in active test', function () {
        let test = new PaymentPackage("Valid", 10);
        test.value = 50;
        expect(test.toString()).to.be.equal('Package: Valid\n' +
            '- Value (excl. VAT): 50\n' +
            '- Value (VAT 20%): 60');
    });
    it('should return changed values in inactive test', function () {
        let test = new PaymentPackage("Valid", 10);
        test.active = false;
        test.value = 50;
        expect(test.toString()).to.be.equal('Package: Valid (inactive)\n' +
            '- Value (excl. VAT): 50\n' +
            '- Value (VAT 20%): 60');
    });
});