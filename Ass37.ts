// Function to create a shirt with given size and message (with default values)
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a small shirt with a custom message
make_shirt('Small', 'Hello, JavaScript!');
