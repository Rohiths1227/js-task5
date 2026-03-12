// Product List
let products = ["laptop","mobile","tablet","smartwatch","mobile"];


// Check if "tablet" exists in the product list
// includes()

let tabletExists = products.includes("tablet");

console.log("Does tablet exist in product list?");
console.log(tabletExists);  


//  Find the first index of "mobile"
// indexOf() 

let firstMobileIndex = products.indexOf("mobile");

console.log("First index of mobile:");
console.log(firstMobileIndex);   


// Find the last index of "mobile"
// lastIndexOf() 

let lastMobileIndex = products.lastIndexOf("mobile");

console.log("Last index of mobile:");
console.log(lastMobileIndex);   


// Check if "camera" exists
// includes() 

let cameraExists = products.includes("camera");

console.log("Does camera exist in product list?");
console.log(cameraExists);  