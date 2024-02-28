// This file is related to the IPv4 Jist

// This function will validate addresses 
// We will ue Node.js as our enviroment 
// We will use readline to interact with the user and display results 
// We need to be able to validate IPv4 Addresses using Regex 
// We need to be able to take users input and pass it to the function 
// We need to allow the user to input multiple addresses
// The results need to be displayed back to the user after the function has executed; 


// Declare readline and import module 
// Take the user input , allow user to add multiple addresses using commas and space
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Use readline to interact with user 
// Ask for addresses // allow users to input multiple addresses 
// map input to 'address' 
// loop through each address and print result 
// When finished close readline and exit function 
readline.question('Enter the IPv$ addresses sperated by the a space:', input =>{
    const address = input.split(' ');
    address.forEach(address => {
        console.log(`Address: ${address}, Valid ${validateIPv4(address)}`);
    });
    readline.close();
});


// Validate the addresses from the user input
// Use regex to validate IPv4 address
// return false if parameters not met 
// Needs to match the octets (0-255)
// Need to match format  (888.888.88.8)
function validateIPv4(address) {
    const regexPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (regexPattern.test(address)) {
        return address.split('.').every(part => {
            const num = parseInt(part, 10);
            return num >= 0 && num <= 255;
        });
    }
    return false;
};
