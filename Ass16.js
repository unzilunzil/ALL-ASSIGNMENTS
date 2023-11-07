"use strict";
// Assignment 16
//Your original list of guests
let guests = ['Alisha', 'Bisma', 'Sana'];
// Print a message about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guests.unshift('Rabia');
// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, 'Eve');
// Use append() (push in JavaScript) to add a new guest to the end of the array
guests.push('Abiha');
// Print invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to the dinner!`);
}
