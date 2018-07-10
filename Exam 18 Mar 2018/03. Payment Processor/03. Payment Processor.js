class PaymentProcessor{

    constructor(options){

        this.options = {types: ["service", "product", "other"],
        precision: 2};

        if(options){
            if(options.types){
                this.options.types = options.types;
            }
            if(options.precision){
                this.options.precision = options.precision;
            }
        }

        this.orders = {};
    }

    setOptions(options){
        this.options = {types: ["service", "product", "other"],
            precision: 2};
        if(options){
            if(options.types){
                this.options.types = options.types;
            }
            if(options.precision){
                this.options.precision = options.precision;
            }
        }
    }

    get(id){
        if(this.orders[id] === undefined){
            throw new TypeError('ID not found');
        }
        return `Details about payment ID: ${id}\n- Name: ${this.orders[id].name}\n- Type: ${this.orders[id].type}\n- Value: ${this.orders[id].value}`;
    }

    registerPayment(id, name, type, value){

        if(this.orders[id] !== undefined || id === ''){
            throw new TypeError('Invalid ID');

        }
        if(name === ''){
            throw new TypeError('name is empty string');
        }

        if(typeof value !== 'number'){
            throw new TypeError('Value is not a number');
        }

        if(this.options.types.indexOf(type) === -1){
            throw new TypeError('Invalid type');
        }

        this.orders[id] = {name:name, type:type, value:value.toFixed(this.options.precision)};
    }

    deletePayment(id){
        if(this.orders[id] === undefined){
            throw new Error('ID Not found');
        }
        delete this.orders[id];
    }

    toString(){
        let payments = Object.keys(this.orders).length;
        let balance = Array.from(Object.values(this.orders)).reduce((a, b) => a + Number(b['value']), 0);

        return `Summary:\n- Payments: ${payments}\n- Balance: ${balance}`
    }
}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());