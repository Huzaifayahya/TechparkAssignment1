const arr = ["A","B", "C","a","b", {a: 2}];
// console.log(arr.indexOf({a: 2}));

// const nameReverse = "we are learning javascript"
// for (let i=0; i < nameReverse.length -1; i++) {
    // nameReverse.length = +
// // }
// const calculate =(a,b,cb)=> cb(a,b)

// const addition =(a,b,)=> a + b
// const subtraction =(a,b,)=> a - b
// const multiplication =(a,b,)=> a * b
// const divison =(a,b)=> a / b
// const power=(a,b)=> a ** b

// console.log(calculate(4 , 2 addition));
// console.log(calculate(4 , 2 subtraction));
// console.log(calculate(4 , 2 multiplication));
// console.log(calculate(4 , 2 divison));
// console.log(calculate(4 , 2 power));
const student=[
    {firstName:`Alice`, lastName:`smith`},
    {firstName:`Bob`, lastName:`Johnson`},
    {firstName:`Charlie`, lastName:`Williams`},
    {firstName:`Alice`, lastName:`smith`}
]
const operation = (student) =>student.firstName + ''+ student.lastName

console.log(student.map(operation))


// function multiply(a,b){
//     return a* b;
// }
// let result1 = multiply(5,10);
// console.log(result1)

// function add(a, b) {
//     return a + b;
// }

// let result2 = add(5, 5);
// console.log(result2);


// function substract(a, b) {
//     return a - b;
// }

// let result3 = substract(5, 5);
// console.log(result3);


// function Devide(a, b) {
//     return a / b;
// }

// let result4 = add(5, 5);
// console.log(result4);