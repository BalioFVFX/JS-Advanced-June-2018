function solution(commands) {
    let commandsProcessor = (function () {
        let objects = {};

        function create(arr) {
            if (arr.length < 2) {
                objects[arr[0]] = {};
            }
            else {
                objects[arr[0]] = Object.create(objects[arr[2]]);
            }
        }

        function set(arr) {
            let objName = arr[0];
            let objKey = arr[1];
            let objValue = arr[2];
            objects[objName][objKey] = objValue
        }

        function print(arr) {
            let key = arr[0];
            let obj = objects[key];
            let output = [];
            for (let innerKey in obj) {
                output.push(`${innerKey}:${obj[innerKey]}`);
            }
            console.log(output.join(', '));

        }


        return {
            create: create,
            set: set,
            print: print
        }

    }());

    for (let str of commands) {
        let cmds = str.split(' ');
        commandsProcessor[cmds.shift()](cmds);

    }
}

solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'create c3 inherit c2',
    'print c1',
    'print c2',
    'print c3'
]);