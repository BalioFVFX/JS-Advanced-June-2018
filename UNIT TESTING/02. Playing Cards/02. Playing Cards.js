function solution(cardInput, suitInput) {
    let card = {
        toString: function () {
            return `${this.card}${this.suit}`
        }
    };

    if (!isValidCard(cardInput)) {
        throw new Error(`Invalid card face ${cardInput}`);
    }
    if (getSuit(suitInput) === -1) {
        throw new Error(`Invalid card suit ${suitInput}`);
    }

    card['card'] = cardInput;
    card['suit'] = getSuit(suitInput);
    return card;


    function isValidCard(card) {
        return Number(card) >= 2 && Number(card) <= 10 ||
            card === 'A' || card === 'K' || card === 'Q'
            || card === 'J';
    }

    function getSuit(suit) {
        switch (suit) {
            case 'H':
                return '\u2665';
            case 'S':
                return '\u2660';
            case 'D':
                return '\u2666';
            case 'C':
                return '\u2663';
            default:
                return -1;
        }
    }
}

console.log('' + solution('A', 'S'));
console.log('' + solution('10', 'H'));
console.log('' + solution('1', 'C'));