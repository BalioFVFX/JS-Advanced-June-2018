function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, Number(gasWeight));
            this.ribbonColor = ribbonColor;
            this.ribbonLength = Number(ribbonLength);
            this.ribbon = {color: ribbonColor, length: Number(ribbonLength)};
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, Number(gasWeight), ribbonColor, Number(ribbonLength));
            this.text = text;
        }

        get text() {
            return this._text;
        }

        set text(newText) {
            this._text = newText;
        }
    }

    return ({Balloon: Balloon, PartyBalloon: PartyBalloon, BirthdayBalloon: BirthdayBalloon});
}

let classes = solution();

let Balloon = classes.Balloon;
let PartyBalloon = classes.PartyBalloon;
let BirthdayBalloon = classes.BirthdayBalloon;

BirthdayBallonA = new BirthdayBalloon('Green', 5, 'Red', 20, 'Text');

console.log(BirthdayBalloon['__proto__']);
//console.log(BirthdayBallonA);