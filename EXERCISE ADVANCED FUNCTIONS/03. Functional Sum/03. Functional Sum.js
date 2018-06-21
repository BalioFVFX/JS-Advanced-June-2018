function solution(n) {
    let add = function (n) {
        let result = n;

        function sum(n) {
            result += n;
            return sum;
        }

        sum.toString = () => result;
        return sum;
    };
    return add(n);

}

console.log(solution(1)(2).toString());