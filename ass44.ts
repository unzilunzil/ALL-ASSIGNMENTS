// Function to summarize the sandwich being ordered
function makeSandwich(...items : any) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich!");
    } else {
        console.log("You ordered a sandwich with:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
    }
    console.log("-----------------------");
}

// Calling the function with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Bacon');
makeSandwich('Peanut Butter', 'Jelly');
