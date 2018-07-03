class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size = this.list.length;
            this.list.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

let myList = new SortedList();

myList.add(10);
console.log(myList.size);
myList.add(20);
myList.get(-23);
console.log(myList.size);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));