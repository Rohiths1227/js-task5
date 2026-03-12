let sports = ["cricket","vollyball","bodybuilding","tennis","kabadi"];


//Extract "football" and "tennis"
// slice(start, end)

let selectedSports = sports.slice(1,3);

console.log("vollyball and bodybuilding:");
console.log(selectedSports);


//Extract first 3 sports
// start index = 0, end index = 3

let firstThreeSports = sports.slice(0,3);

console.log("First 3 Sports:");
console.log(firstThreeSports);