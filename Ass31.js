"use strict";
// List of users
const users = ['Alice', 'Bob', 'Charlie', 'David'];
// Check if the list of users is not empty
if (users.length > 0) {
    // Print the list of users before removal
    console.log('List of Users Before Removal:', users);
    // Remove all usernames from the array
    users.length = 0;
    // Check if the list of users is empty after removal
    if (users.length === 0) {
        console.log('All users have been removed.');
    }
    else {
        console.log('Error: Users were not removed.');
    }
}
else {
    // Print a message if the list of users is empty
    console.log('We need to find some users!');
}
