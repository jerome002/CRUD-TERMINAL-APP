//getting user input from the terminal when using Node.js not using the browser
//using the readline module
const readline = require('readline');
// in memory contact list
const contacts = [];
// create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
// function to display the menu options
function displayMenu() {
    console.log('1. Add Contact');
    console.log('2. View Contacts');
    console.log('3. Update Contact');
    console.log('4. Delete Contact');
    console.log('5. Exit');
}   
// choose an option
rl.question('Choose an option: ', handleUserInput);
// function to handle user input 
function handleUserInput(option) {
    switch (option) {
        case '1':
            addContact();
            break;
        case '2':
            viewContacts();
            break;
        case '3':
            updateContact();
            break;
        case '4':
            deleteContact();
            break;
        case '5':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            displayMenu();
            rl.question('Choose an option: ', handleUserInput);
    }
}
// function to add a contact
function addContact() {
    rl.question('Enter contact name: ', (name) => {
        rl.question('Enter contact phone number: ', (phone) => {
            contacts.push({ name, phone });
            console.log(`Contact ${name} added.`);
            displayMenu();
            rl.question('Choose an option: ', handleUserInput);
        });
    });
}
// function to view contacts
function viewContacts() {
    if (contacts.length === 0) {
        console.log('No contacts found.');
    } else {
        console.log('Contacts:');
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
        });
    }
    displayMenu();
    rl.question('Choose an option: ', handleUserInput);
}
// function to update a contact
function updateContact() {
  if (contacts.length === 0) {
    console.log("No contacts to update.");
    displayMenu
    return;
  }

  console.log("Your Contacts:");
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact}`);
  });

  rl.question("Enter the number of the contact to update: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < contacts.length) {
      rl.question("Enter the new name: ", (newName) => {
        console.log(`Updated: ${contacts[index]} ➜ ${newName}`);
        contacts[index] = newName;
        displayMenu
      });
    } else {
      console.log("Invalid contact number.");
     displayMenu
    }
  });
}

// function to delete a contact
function deleteContact() {
  if (contacts.length === 0) {
    console.log("No contacts to delete.");
    displayMenu
    return;
  }

  console.log("Your Contacts:");
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact}`);
  });

  rl.question("Enter the number of the contact to delete: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < contacts.length) {
      console.log(`Deleted: ${contacts[index]}`);
      contacts.splice(index, 1);
    } else {
      console.log("Invalid contact number.");
    }
    displayMenu
  });
}

// display the menu for the first time
displayMenu();