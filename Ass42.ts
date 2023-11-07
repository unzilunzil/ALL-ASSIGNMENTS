// Function to modify magicians' names by adding "the Great"
function make_great1(magicians : any ) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
    return magicians;
}

// Function to show magicians from the given array
function show_magicians1(magicians : any) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Array of magician's names
const magicians1 = ['Merlin', 'David Copperfield', 'Houdini', 'Dynamo'];

// Calling make_great() function to modify magicians' names
const greatMagicians = make_great1(magicians1.slice()); // Using slice() to create a copy of the original array

// Calling show_magicians() to display modified magician's names
show_magicians1(greatMagicians);
