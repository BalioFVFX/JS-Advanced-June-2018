class Keyboard {
    constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
    }
}

class Monitor {
    constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = Number(width);
        this.height = Number(height);
    }
}

class Battery {
    constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
    }
}

class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new Error('Not allowed to initialize abstract class');
        }
        this.manufacturer = manufacturer;
        this.processorSpeed = Number(processorSpeed);
        this.ram = Number(ram);
        this.hardDiskSpace = Number(hardDiskSpace);
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = Number(weight);
        this.color = color;
        if (battery.constructor.name !== 'Battery') {
            throw new TypeError('Not a battery class');
        }
        this.battery = battery;

    }

    get battery() {
        return this._battery;
    }

    set battery(newBattery) {
        if (newBattery.constructor.name !== 'Battery') {
            throw new TypeError('Not a battery class');
        }
        this._battery = newBattery;
    }
}


class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);

        if (keyboard.constructor.name !== 'Keyboard') {
            throw new TypeError('Not a Keyboard class');
        }

        if (monitor.constructor.name !== 'Monitor') {
            throw new TypeError('Not a Monitor class');
        }
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard() {
        return this._keyboard;
    }

    set keyboard(newKeyboard) {
        if (newKeyboard.constructor.name !== 'Keyboard') {
            throw new TypeError('Not a Keyboard class');
        }
        this._keyboard = newKeyboard;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(newMonitor) {
        if (newMonitor.constructor.name !== 'Monitor') {
            throw new TypeError('Not a Monitor class');
        }
        this._monitor = newMonitor;
    }
}


function createMixins() {
    function computerQualityMixin(classToExtend) {
        let mixin = {
            getQuality() {
                return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
            },
            isFast() {
                return this.processorSpeed > (this.ram / 4);

            },
            isRoomy() {
                return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
            }
        };
        Object.assign(classToExtend.prototype, mixin);
    }

    function styleMixin(classToExtend) {
        let mixin = {
            isFullSet() {
                return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
            },
            isClassy() {
                return this.battery.expectedLife >= 3 && this.weight < 3 && this.color === 'Silver' || this.color === 'Black';
            }
        };
        Object.assign(classToExtend.prototype, mixin);
    }

    return {computerQualityMixin, styleMixin};
}

let mixins = createMixins();
mixins.computerQualityMixin(Desktop);
mixins.styleMixin(Laptop);

let keyboardA = new Keyboard('Test', 1.0);
let monitorA = new Monitor('Test', 10, 20);
let myDesktop = new Desktop('Test Name', 3.5, 2, 1, keyboardA, monitorA);
console.log(myDesktop.getQuality());
console.log(myDesktop.isFast());
console.log(myDesktop.isRoomy());
console.log('--------------------------');
let myBattery = new Battery('Battery Name', 3);
let myLaptop = new Laptop('Laptop name', 3.5, 9, 2, 3, 'Silver', myBattery);
console.log(myLaptop.isClassy());