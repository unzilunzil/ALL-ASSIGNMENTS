// List of current users
const currentUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

// List of new users
const newUsers = ['Bob', 'Frank', 'Grace', 'Alice', 'Henry'];

// Function to check if a username is unique (case-insensitive)
function isUnique(username : any)  {
    return currentUsers.map(user => user.toLowerCase()).includes(username.toLowerCase());
}

// Loop through new_users and check for uniqueness
for (let i = 0; i < newUsers.length; i++) {
    const username = newUsers[i];
    if (isUnique(username)) {
        console.log(`Sorry, the username '${username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${username}' is available.`);
    }
}
