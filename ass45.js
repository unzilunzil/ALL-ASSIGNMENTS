"use strict";
// Function to store car information in an object
function createCar(manufacturer, modelName, options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Process additional keyword arguments (options) and add them to the car object
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Calling the function with required information and additional name-value pairs
const carInfo = createCar('Toyota', 'Corolla', 'color');
// Printing the object to ensure all information is stored correctly
console.log(carInfo);
