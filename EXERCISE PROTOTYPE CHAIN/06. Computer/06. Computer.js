function solution() {
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

    return {Keyboard, Monitor, Battery, Computer, Laptop, Desktop};
}

let classes = solution();

let Compter = classes.Computer;
let Laptop = classes.Laptop;
let Battery = classes.Battery;

let batteryA = new Battery('Battery name', 9);


let laptopA = new Laptop('Laptop name', 3.5, 16, 1, 20, 'Black', batteryA);

console.log(laptopA.battery);
console.log('-----------------------------');

let Desktop = classes.Desktop;
let Keyboard = classes.Keyboard;
let Monitor = classes.Monitor;

let keyboardA = new Keyboard('Keyboard name', 0.9);
let monitorA = new Monitor('Monitor name', 10, 20);
let myDesktop = new Desktop('Desktop name', 3.5, 16, 2, keyboardA, monitorA);
console.log(myDesktop);