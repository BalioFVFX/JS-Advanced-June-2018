function solution(input) {
    let iife = (function () {
        let result = '';
        return (command, item) => {
            if (command === 'append') {
                result += item;
            }
            else if (command === 'removeStart') {
                result = result.substring(item);
            }
            else if (command === 'removeEnd') {
                result = result.substring(0, result.length - item);
            }
            else if (command === 'print') {
                console.log(result);
            }
        }


    })();

    for (let element of input) {
        let [command, item] = element.split(' ');
        iife(command, item);
    }
}

solution(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);