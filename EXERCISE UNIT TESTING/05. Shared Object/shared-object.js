let expect = require("chai").expect;
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("Name", function () {
    it('should return null', function () {
        expect(sharedObject.name).to.be.equal(null);
    });
});

describe("Income", function () {
    it('should return null', function () {
        expect(sharedObject.income).to.be.equal(null);
    });
});

describe("Change name", function () {
    it('should return null', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.be.equal(null);
    });
    it('should return object name property', function () {
        sharedObject.changeName("Peter");
        expect(sharedObject.name).to.be.equal("Peter");
    });
    it('should return dom value', function () {
        sharedObject.changeName("Peter");
        let name = $('#name').val();
        expect(name).to.be.equal("Peter");
    });
    it('should return object name property', function () {
        sharedObject.changeName("Peter");
        sharedObject.changeName("");
        expect(sharedObject.name).to.be.equal("Peter");
    });
    it('should return dom value', function () {
        sharedObject.changeName("Peter");
        sharedObject.changeName("");
        let name = $('#name').val();
        expect(name).to.be.equal("Peter");
    });
    it('should return object name property', function () {
        sharedObject.changeName(15);
        expect(sharedObject.name).to.be.equal(15);
    });
    it('should return dom value', function () {
        sharedObject.changeName(15);
        let name = $('#name').val();
        expect(name).to.be.equal(15);
    });
});

describe("Change Income", function () {
    it('should return null', function () {
        sharedObject.changeIncome(-1);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        sharedObject.changeName(100);
        sharedObject.changeIncome(-1);
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return null', function () {
        sharedObject.changeIncome(100);
        sharedObject.changeIncome(1.5);
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return null', function () {
        sharedObject.changeIncome(1.5);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        sharedObject.changeIncome(-1.5);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        sharedObject.changeIncome(100);
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return null', function () {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return NaN/null', function () {
        sharedObject.changeIncome("NaN");
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return NaN/null', function () {
        sharedObject.changeIncome(100);
        sharedObject.changeIncome("NaN");
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return object value', function () {
        sharedObject.changeIncome(100);
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return DOM value', function () {
        sharedObject.changeIncome(100);
        let income = $('#income').val();
        expect(income).to.be.equal("100");
    });
});

describe("Update name", function () {
    it('should return null', function () {
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal(null);
    });
    it('should return Test', function () {
        sharedObject.changeName("Peter");
        $('#name').val("Test");
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal("Test");
    });
    it('should return Test', function () {
        $('#name').val("Test");
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal("Test");
    });
    it('should return Test', function () {
        sharedObject.changeName("Peter");
        $('#name').val("");
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal("Peter");
    });
});

describe("Update Income", function () {
    it('should return NaN/null', function () {
        $('#income').val("NaN");
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        $('#income').val(1.5);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        $('#income').val(0);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        $('#income').val(-1);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return null', function () {
        $('#income').val(-1.5);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(null);
    });
    it('should return 100', function () {
        $('#income').val(100);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(100);
    });
    it('should return 100', function () {
        $('#income').val(100);
        sharedObject.updateIncome();
        $('#income').val(0);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(100);
    });
});