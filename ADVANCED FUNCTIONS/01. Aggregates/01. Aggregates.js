function solution(input) {
    console.log(`Sum = ${input.reduce((a, b) => a + b)}`);
    console.log(`Min = ${input.reduce((a, b) => Math.min(a, b))}`);
    console.log(`Min = ${input.reduce((a, b) => Math.max(a, b))}`);
    console.log(`Min = ${input.reduce((a, b) => a * b)}`);
    console.log(`Min = ${input.reduce((a, b) => a.toString() + b.toString())}`);
}