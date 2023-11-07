// 🥲: // Assignment 15 
let guestList = ["MUHAMMAD ASLAM", "RAFAT ASLAM", "ZAID ASLAM"];
for (let guest of guestList) {
  console.log("Dear " + guest + ", you are invited for dinner at my place. Please join us!");
}

// A guest can't make it
const guestcouldnotMakeIt = guestList[1];
console.log("\nUnfortunately, " + guestcouldnotMakeIt + " can't make it to the dinner.\n");

// Replace the guest who can't make it
for (let guest of guestList) {
  console.log("Dear " + guest[0] + ", you are invited for dinner at my place. Please join us!");
}
