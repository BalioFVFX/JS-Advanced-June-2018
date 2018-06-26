function closure() {
    let elements = [];

    function add(el) {
        elements.push(el);
        elements.sort((a, b) => a - b);
        this['size'] = elements.length;
    }

    function remove(index) {
        if (index >= 0) {
            elements.splice(index, 1);
            elements.sort((a, b) => a - b);
            this['size'] = elements.length;
        }
    }

    function get(index) {
        if (index >= 0 && index < elements.length) {
            return elements[index];
        }
    }

    return {add: add, remove: remove, get: get, size: 0};

}

let result = closure();

let list = result;

list.add(-20);
console.log(list.get(0));
list.add(-1);
console.log(list.get(0));
console.log(list.size);