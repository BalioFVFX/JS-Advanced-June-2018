(function (vector1, vector2) {

    let add = function (vector1, vector2) {
        function calculate() {
            return [vector1[0] + vector2[0], vector1[1] + vector2[1]]
        }

        return calculate();
    };

    let multiply = function (vector1, vector2) {
        function calculate() {
            return [vector1[0] * vector2, vector1[1] * vector2]
        }

        return calculate();
    };

    let length = function (vector1) {
        function calculate() {
            return Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1])
        }

        return calculate();
    };

    let dot = function (vector1, vector2) {
        function calculate() {
            return vector1[0] * vector2[0] + vector1[1] * vector2[1];
        }

        return calculate();
    };

    let cross = function (vector1, vector2) {
        function calculate() {
            return vector1[0] * vector2[1] - vector1[1] * vector2[0];
        }

        return calculate();
    };

    let object = {add: add, multiply: multiply, length: length, dot: dot, cross: cross};
    return object;

}());