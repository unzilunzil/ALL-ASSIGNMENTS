// Assignment 30
const usernames = ['ali', 'annie', 'Aaman', 'areeb', 'ahad'];

for (const username of usernames) {
  if (username === 'ali') {
    console.log('Hello ali, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}