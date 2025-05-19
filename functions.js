console.log("Functions in JavaScript");
// function to add two numbers
function add(a, b){
    let sum =a+b;
    return sum;
}
//arrow function to add two numbers
const addArrow = (a, b) => {
    let sum = a + b;
    return sum;
}
console.log("Sum of 2 and 3 is: " + add(2, 3));
console.log("Sum of 2 and 3 is: " + addArrow(2, 3));
// function to check if a number is even
const checkEvenOdd= (num) => {
    if(num % 2 === 0){
        return true;
    }
    return false;
}
let num = 4;
console.log("Is " + num + " even? " + checkEvenOdd(num));