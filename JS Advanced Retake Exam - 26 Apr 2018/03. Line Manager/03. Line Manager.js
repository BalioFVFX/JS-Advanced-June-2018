class LineManager {
    constructor(stops) {
        if (Array.isArray(stops) === false) {
            throw new Error('stops must be an array');
        }
        for (let i = 0; i < stops.length; i++) {

            if (stops[i].name === undefined || stops[i].name === '' || typeof stops[i].name !== 'string') {
                throw new Error('Invalid stop name');
            }
            if (stops[i].timeToNext === undefined || Number.isNaN(stops[i].timeToNext) || typeof stops[i].timeToNext !== 'number' || stops[i].timeToNext < 0) {
                throw new Error('Invalid time');
            }
        }
        this.stops = stops;
        this.stopsCovered = 0;
        this.timeOnCourse = 0;
        this.delay = 0;

    }

    get atDepot() {
        if (this.stops.length <= 1) {
            return true
        }
        return false;
    }

    get nextStopName() {
        if (this.stops.length === 1) {
            return 'At depot.';
        }
        else {
            return this.stops[1].name;
        }
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        if (minutes === undefined || Number.isNaN(minutes) || typeof minutes !== 'number' || minutes <= 0 || this.atDepot === true) {
            throw new Error('Negative/invalid minutes, or at depot')
        }
        this.timeOnCourse += minutes;
        this.stopsCovered++;
        this.delay += minutes - this.stops[0].timeToNext;
        this.stops.shift();

        return !this.atDepot;
    }

    toString() {
        let nextStop = this.nextStopName;
        if (this.stops.length <= 1) {
            nextStop = 'Course completed';
        }
        return `Line summary\n - Next stop: ${nextStop}\n - Stops covered: ${this.stopsCovered}\n - Time on course: ${this.timeOnCourse} minutes\n - Delay: ${this.delay} minutes`;
    }
}

const wrong = new LineManager([{name: 'test', timeToNext: 3}, {name: 'test', timeToNext: 3}]);

console.log(wrong.arriveAtStop(2));