function solution() {
    let myMap = new Map();
    for (const arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);

        if (!myMap.has(typeof(arg))) {
            myMap.set(typeof(arg), 0);
        }
        myMap.set(typeof(arg), myMap.get(typeof(arg)) + 1)
    }

    let sorted = Array.from(myMap);
    sorted.sort(function (a, b) {
        if (a[1] > b[1]) {
            return -1;
        }
        else if (a[1] < b[1]) {
            return 1;
        }
    }).forEach(function (item) {
        console.log(`${item[0]} = ${item[1]}`);
    });
}

solution('cat', 42, function () {
    console.log('Hello world!');
});