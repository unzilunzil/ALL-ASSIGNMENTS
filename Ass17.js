"use strict";
//  //Assignment 17
let guestList2 = ["aliza", "bareera", "abrish", "masooma", "zayan", "azan"];
console.log("Dinner invitations:");
for (const guest of guestList2) {
    console.log("Dear " + guest + ", you are cordially invited to a dinner at my place. Please join us!");
}
console.log("\nUnfortunately, due to space limitations, I can only invite two people for dinner.\n");
while (guestList2.length > 2) {
    const removedGuest = guestList2.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner this time.");
}
console.log("\nFinal dinner invitations:");
for (const guest of guestList2) {
    console.log("Dear " + guest + ", you are still cordially invited to a dinner at my place. Please join us!");
}
