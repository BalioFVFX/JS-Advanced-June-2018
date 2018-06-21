function solution(arr, criteria) {
    arr.sort(function (a, b) {
        if (criteria === 'asc') {
            if (a > b) {
                return 1;
            }
            return -1;
        }
        else if (criteria === 'desc') {
            if (a > b) {
                return -1;
            }
            return 1;
        }
    });

    return arr;
}

console.log(solution([14, 7, 17, 6, 8], 'asc'));
console.log(solution([14, 7, 17, 6, 8], 'desc'));