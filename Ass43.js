"use strict";
// Function to modify magicians' names by adding "the Great"
function make_great(magicians) {
    const modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(magicians[i] + ' the Great');
    }
    return modifiedMagicians;
}
// Function to show magicians from the given array
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
const magicians2 = ['Merlin', 'David Copperfield', 'Houdini', 'Dynamo'];
// Calling make_great() function with a copy of the original array
const greatMagicians2 = make_great(magicians2.slice()); // Using slice() to create a copy of the original array
// Calling show_magicians() to display both the original and modified magician's names
console.log('Original Magicians:');
show_magicians(magicians2);
console.log('\nGreat Magicians:');
show_magicians(greatMagicians2);
