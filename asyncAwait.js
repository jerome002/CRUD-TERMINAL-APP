// If using Node.js <18, uncomment the next line after installing node-fetch:
// const fetch = require('node-fetch');

async function fetchData() {
    try {
        // Use a real API endpoint, e.g., JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
//API to fetch data from
fetchData();