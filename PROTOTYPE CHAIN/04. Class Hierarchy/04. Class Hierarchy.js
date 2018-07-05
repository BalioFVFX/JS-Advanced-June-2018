function solution() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError(`Cannot initialize Figure, because it's an abstract class`);
            }
        }

        area() {
            return undefined;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Circle - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Rectangle - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle};
}

let classes = solution();

let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;

let circleA = new Circle(10);
let rectangleA = new Rectangle(5, 20);

console.log(circleA.area);
console.log(rectangleA.area);

let figureA = new Figure();



