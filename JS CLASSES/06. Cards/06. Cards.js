let result = (function () {

    let validCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let Suits = {SPADES: '\u2660', HEARTS: '\u2665', DIAMONDS: '\u2666', CLUBS: '\u2663'};

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }

        set face(face) {
            if (validCards.indexOf(face) === -1) {
                throw new Error("Invalid card face!");
            }
            this._face = face;
        }

        set suit(suit) {
            if (Object.values(Suits).indexOf(suit) === -1) {
                throw new Error("Invalid card suit!");
            }
            this._suit = suit;
        }
    }

    return {Suits: Suits, Card: Card};
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("1", Suits.DIAMONDS);  //Should throw error