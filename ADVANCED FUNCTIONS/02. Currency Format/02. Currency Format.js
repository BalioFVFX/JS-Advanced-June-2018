function solution(func) {
    function getCurrency(func) {
        function formatter(value) {
            return func(',', '$', true, value);
        }

        return formatter;
    }

    let result = getCurrency(func);
    return result;
}
solution(currencyFormatter);

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}