function solution() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let superStr = super.toString();
            superStr = superStr.substring(0, superStr.length - 1);
            return `${superStr}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let superStr = super.toString();
            superStr = superStr.substring(0, superStr.length - 1);
            return `${superStr}, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

let classes = solution();

let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let personA = new Person("Pesho", "Pesho@gmail.com");
let teacherA = new Teacher("PeshoTeacher", "PeshoTeacher@gmail.com", "Pesho's subject");
let studentA = new Student("PeshoStudent", "PeshoStudent@gmail.com", "Pesho's course");

console.log(personA.toString());
console.log(teacherA.toString());
console.log(studentA.toString());