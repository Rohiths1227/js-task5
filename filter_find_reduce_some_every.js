let employees = [
  {name:"Pradeesh", salary:25000},
  {name:"Rohith", salary:60000},
  {name:"Abi", salary:45000},
  {name:"Suganya", salary:80000},
  {name:"kalai", salary:30000}
];

// Get employees whose salary is greater than 40000
// filter() 

let highSalaryEmployees = employees.filter(function(emp){
  return emp.salary > 40000;
});

console.log("Employees salary greater than 40000:");
console.log(highSalaryEmployees);


// ️Find the first employee whose salary is above 70000
// find() 

let firstHighSalaryEmployee = employees.find(function(emp){
  return emp.salary > 70000;
});

console.log("First employee salary above 70000:");
console.log(firstHighSalaryEmployee);


//  Calculate the total salary of all employees
// reduce() 

let totalSalary = employees.reduce(function(total, emp){
  return total + emp.salary;
}, 0);

console.log("Total Salary of Employees:");
console.log(totalSalary);


// Check if any employee salary is below 20000
// some() 

let anyLowSalary = employees.some(function(emp){
  return emp.salary < 20000;
});

console.log("Is any employee salary below 20000?");
console.log(anyLowSalary);


// Check if all employees salary are above 20000
// every()

let allAbove20k = employees.every(function(emp){
  return emp.salary > 20000;
});

console.log("Are all employees salary above 20000?");
console.log(allAbove20k);