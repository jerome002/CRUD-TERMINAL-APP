//callback 
function add(num1, num2, callback) {
    const sum= num1 + num2;
    callback(sum);
}
function displayResult(result) {
    console.log("The sum is: " + result);
}
// Example usage
add(5, 10, displayResult); // The sum is: 15
// The add function takes two numbers and a callback function as arguments.
// It calculates the sum of the two numbers and then calls the callback function with the result.
// The displayResult function is defined to handle the result of the addition.
// It simply logs the result to the console.
// The add function is called with two numbers and the displayResult function as the callback.
// This demonstrates how to use callbacks to handle asynchronous operations in JavaScript.
// In this example, the add function is synchronous, but the concept of callbacks is often used in asynchronous programming.    
// In a real-world scenario, you might use callbacks to handle events, such as when a user clicks a button or when data is fetched from an API.
// Callbacks are a fundamental concept in JavaScript and are widely used in various libraries and frameworks.
// They allow you to write more flexible and modular code by separating the logic of different operations.
// Callbacks can also lead to "callback hell" if not managed properly, where multiple nested callbacks make the code difficult to read and maintain.
// To avoid this, you can use Promises or async/await syntax, which provide a more structured way to handle asynchronous operations.
// In summary, callbacks are a powerful tool in JavaScript for handling asynchronous operations and event-driven programming.
