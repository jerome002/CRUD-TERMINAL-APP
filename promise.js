// This code demonstrates how to create a promise in JavaScript.
let pizzaPromise = new Promise((resolve, reject) => {
  let pizzaReady = false;

  setTimeout(() => {
    if (pizzaReady) {
      resolve("Pizza is here!");
    } 
    else {
      reject("Sorry, we couldn’t deliver the pizza.");
    }
  }, 2000); // 2 seconds wait
});

pizzaPromise
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("FAILURE:", error);
  });
// This code demonstrates how to create a promise in JavaScript.
let cleanRoom = new Promise((resolve, reject) => {
  let isClean = false;

  setTimeout(() => {
    if (isClean) {
      resolve("Room is clean!");
    }
    else {
      reject("Room is still dirty.");
    }   
    }
    , 2000); // 2 seconds wait  
}
);
cleanRoom
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("FAILURE:", error);
  });
    let playGame = new Promise((resolve, reject) => {
      let isPlaying = true;

      setTimeout(() => {
        if (isPlaying) {
          resolve("Game is in progress!");
        } 
        else {
          reject("Game is over.");
        }
      }, 2000); // 2 seconds wait
    }
    );
    playGame
      .then((message) => {
        console.log("SUCCESS:", message);
      })
      .catch((error) => {
        console.log("FAILURE:", error);
      });   
// This code demonstrates how to create a promise in JavaScript.
// It creates a promise that simulates the delivery of a pizza.
// The promise is resolved if the pizza is ready, and rejected if it is not.
// The promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.
// The setTimeout function is used to simulate a delay of 2 seconds before resolving or rejecting the promise.
// The then method is used to handle the resolved value, and the catch method is used to handle the rejected value.
// The promise is created with a 2-second delay to simulate the time it takes for the pizza to be delivered.    
// The promise is resolved with a success message if the pizza is ready, and rejected with an error message if it is not.
// The promise is created with a 2-second delay to simulate the time it takes for the pizza to be delivered.
// The promise is resolved with a success message if the pizza is ready, and rejected with an error message if it is not.
// The promise is created with a 2-second delay to simulate the time it takes for the pizza to be delivered.