"use strict";
// Function to format city and country
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with different city-country pairs
const city1 = city_country('Lahore', 'Pakistan');
const city2 = city_country('New York', 'USA');
const city3 = city_country('Tokyo', 'Japan');
// Printing the formatted strings
console.log(city1); // Output: Lahore, Pakistan
console.log(city2); // Output: New York, USA
console.log(city3); // Output: Tokyo, Japan
