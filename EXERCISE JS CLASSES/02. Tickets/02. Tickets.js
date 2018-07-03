function solution(input, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let i = 0; i < input.length; i++) {
        let currentInput = input[i].split('|');
        let currentTicket = new Ticket(currentInput[0], Number(currentInput[1]), currentInput[2]);
        tickets.push(currentTicket);
    }

    tickets.sort(function (a, b) {
        return a[sortingCriteria] > b[sortingCriteria];
    });

    return tickets;

}

console.log(solution(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

console.log('==========================');

console.log(solution(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));
