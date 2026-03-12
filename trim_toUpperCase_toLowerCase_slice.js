
// User entered username with extra spaces
let username = "   yuvanshankarraja   ";


// Remove extra spaces
// trim()

let cleanUsername = username.trim();

console.log("Username without spaces:");
console.log(cleanUsername);


// Convert the username to uppercase
// toUpperCase()

let upperUsername = cleanUsername.toUpperCase();

console.log("Username in uppercase:");
console.log(upperUsername);


//  Convert the username to lowercase
// toLowerCase()

let lowerUsername = cleanUsername.toLowerCase();

console.log("Username in lowercase:");
console.log(lowerUsername);


// Extract first 6 characters of the username
// slice(start, end) 

let firstSix = cleanUsername.slice(0,6);

console.log("First 6 characters of username:");
console.log(firstSix);