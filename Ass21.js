"use strict";
function createObjects() {
    // Create an object with properties
    const person = {
        name: "John",
        age: 30,
        isEmployed: true,
    };
    // Access and modify object properties
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Is Employed: ${person.isEmployed}`);
    // Modify object properties
    person.age = 31;
    person.isEmployed = false;
    console.log("\nAfter Modification:");
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Is Employed: ${person.isEmployed}`);
    // Create an object with dynamic properties
    const dynamicObject = {
        key1: "value1",
        key2: 123,
        key3: true,
    };
    // Access dynamic object properties
    console.log("\nDynamic Object Properties:");
    for (const key in dynamicObject) {
        if (dynamicObject.hasOwnProperty(key)) {
            console.log(`${key}: ${dynamicObject[key]}`);
        }
    }
}
// Call the function to create and manipulate objects
createObjects();
