"use strict";
// // Assignment 18
// Array of places to visit
let placesToVisit = ["Paris", "switzerland", "New York", "Dubai", "Sydney"];
// Print original order
console.log("Original Order:");
console.log(placesToVisit);
// Print alphabetical order without modifying the actual list
console.log("Alphabetical Order:");
console.log([placesToVisit].sort());
// Verify original order is still intact
console.log("Original Order (still intact):");
console.log(placesToVisit);
// Print reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:");
console.log([placesToVisit].sort().reverse());
// Verify original order is still intact
console.log("Original Order (still intact):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (after reversing again):");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
