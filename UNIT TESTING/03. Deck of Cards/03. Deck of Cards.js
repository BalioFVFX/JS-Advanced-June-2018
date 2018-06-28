function solution(cardsArr) {
    let cards = [];

    for (let i = 0; i < cardsArr.length; i++) {

        let card = cardsArr[i].substring(0, cardsArr[i].length - 1);
        let suit = cardsArr[i][cardsArr[i].length - 1];

        try {
            isValidCard(card);
            getSuit(suit);
        }
        catch (error) {
            console.log(`Invalid card: ${cardsArr[i]}`);
            return;
        }

        cards.push(card + getSuit(suit));
    }

    console.log(cards.join(' '));

    function isValidCard(card) {
        if (Number(card) >= 2 && Number(card) <= 10 ||
            card === 'A' || card === 'K' || card === 'Q'
            || card === 'J') {
            return true;
        }
        else {
            throw new Error(`Invalid card face: ${card}`);
        }

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
                throw new Error(`Invalid card suit: ${suit}`);
        }
    }
}

solution((['AS', '10D', 'KH', '2C']));
solution(['5S', '3D', 'QD', '1C']);