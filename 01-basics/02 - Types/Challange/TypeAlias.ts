type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

// Creating Employee objects
const emp1: Employee = {
  id: 101,
  name: "Aniket Sen",
  department: "Engineering",
  salary: 75000
};

const emp2: Employee = {
  id: 102,
  name: "Riya Sharma",
  department: "HR",
  salary: 60000
};

// Array of employees
const employees: Employee[] = [emp1, emp2];

console.log(employees);