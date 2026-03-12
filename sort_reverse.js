let marks = [74,86,99,99,35,40];


// Sort marks in ascending order (small to large)
// sort()

let ascendingMarks = [...marks].sort(function(a,b){
    return a - b;
});

console.log("Marks in Ascending Order:");
console.log(ascendingMarks);


// Sort marks in descending order (large to small)
// sort()

let descendingMarks = [...marks].sort(function(a,b){
    return b - a;
});

console.log("Marks in Descending Order:");
console.log(descendingMarks);


// Reverse the marks array
// reverse()

let reversedMarks = [...marks].reverse();

console.log("Reversed Marks:");
console.log(reversedMarks);