function solution(strings) {

    let process = (function commandProcessor() {
        let result = [];

        function add(value) {
            result.push(value);
        }

        function remove(value) {
            result = result.filter(w => w !== value);
        }

        function print() {
            console.log(result.join(','));
        }

        return {
            add: add,
            remove: remove,
            print: print
        }
    }());


    for (const str of strings) {
        let [command, value] = str.split(' ');
        process[command](value);

    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);