"use strict";
// Function to describe a city and its country
function describe_city(city, country = 'Default Country') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for different cities
describe_city('Karachi', 'Pakistan'); // Custom country
describe_city('New York'); // Default country
describe_city('Paris', 'France'); // Custom country
