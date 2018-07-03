class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set clientId(newId) {
        if (newId.match(/^[0-9]{6}$/g)) {
            this._clientId = newId;
        }
        else {
            throw new TypeError('Client ID must be a 6-digit number');
        }

    }

    set email(newEmail) {
        if (newEmail.match(/^[a-z]+@[a-z]*\.+[a-z.]+$/g)) {
            this._email = newEmail;
        }
        else {
            throw new TypeError('Invalid e-mail');
        }

    }

    set firstName(newFirstName) {
        if (newFirstName.length < 3 || newFirstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (!newFirstName.match(/^[a-zA-Z]+$/g)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        if (newLastName.length < 3 || newLastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if (!newLastName.match(/^[a-zA-Z]+$/g)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = newLastName;
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');