function getFibonacciNumber() {
    let firstNumber = 0;
    let secondNumber = 1;
    return () => {
        let fibonacciNumber = firstNumber + secondNumber;
        secondNumber = firstNumber;
        firstNumber = fibonacciNumber;
        return fibonacciNumber;
    }
}

let fibonacciNumber = getFibonacciNumber();
console.log(fibonacciNumber());
console.log(fibonacciNumber());
console.log(fibonacciNumber());
console.log(fibonacciNumber());
console.log(fibonacciNumber());
console.log(fibonacciNumber());
console.log(fibonacciNumber());