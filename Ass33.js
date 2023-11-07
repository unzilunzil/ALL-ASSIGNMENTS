"use strict";
// Store numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;
    // Determine the ordinal ending based on the number
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    // Print the ordinal number with the proper ending
    console.log(`${number}${ordinal}`);
}
