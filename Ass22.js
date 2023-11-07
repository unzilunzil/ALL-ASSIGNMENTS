"use strict";
// Assignment 22
const myArray = [1, 2, 3, 4, 5];
const invalidIndex = 10;
try {
    const element = myArray[invalidIndex];
    console.log(`Element at index ${invalidIndex}: ${element}`);
}
catch (error) {
    console.error('An error occurred:');
}
