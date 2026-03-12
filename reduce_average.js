let salaries = [15000,28000,33500,45500];


// Find total salary paid by company
// reduce()

let totalSalary = salaries.reduce(function(total, salary){
    return total + salary;
}, 0);

console.log("Total Salary Paid by Company:");
console.log(totalSalary);


// Find average salary
// Average

let averageSalary = totalSalary / salaries.length;

console.log("Average Salary:");
console.log(averageSalary);