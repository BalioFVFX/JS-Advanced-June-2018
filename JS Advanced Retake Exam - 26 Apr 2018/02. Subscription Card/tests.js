let expect = require('chai').expect;
let SubscriptionCard = require('./SubscriptionCard.js');

describe('class initialization', function () {
    it('should return firstname, lastname, ssn', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        expect(sub.firstName).to.be.equal('First');
        expect(sub.lastName).to.be.equal('Last');
        expect(sub.SSN).to.be.equal('Ssn name');
    });
});

describe('class change values', function () {
    it('should return First', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.firstName = 'Second';
        expect(sub.firstName).to.be.equal('First');
    });
    it('should return Last', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.lastName = 'Second';
        expect(sub.lastName).to.be.equal('Last');
    });
    it('should return Ssn name', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.SSN = 'Second';
        expect(sub.SSN).to.be.equal('Ssn name');
    });
});

describe('blocked functionality', function () {
    it('should return false for not blocked card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        expect(sub.isBlocked).to.be.equal(false);
    });
    it('should return true for blocked card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.block();
        expect(sub.isBlocked).to.be.equal(true);
    });
    it('should return false for unblocked card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.block();
        sub.unblock();
        expect(sub.isBlocked).to.be.equal(false);
    });
});

describe('isValid', function () {
    it('should return false for blocked card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
        sub.block();
        expect(sub.isValid('*', new Date('2018-04-22'))).to.be.equal(false);
    });
    it('should return true for valid card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
        expect(sub.isValid('*', new Date('2018-04-22'))).to.be.equal(true);
    });

    it('should return true for valid card', function () {
        let sub = new SubscriptionCard('First', 'Last', 'Ssn name');
        sub.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
        expect(sub.isValid('*', new Date('2018-05-21'))).to.be.equal(true);
    });
});