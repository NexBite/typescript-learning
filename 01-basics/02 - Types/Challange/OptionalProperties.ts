interface Student {
  name: string;
  age ?: number;
  course: string;
}

// Student 1: age included

const student1: Student = {
  name: "Arrav",
  age: 20,
  course:"computer Science"
};
// Student 2: age omitted
const student2: Student ={
  name: "Priyanka",
  course: "Mathematics"
};

// Print to console
console.log("Student 1:", student1);
console.log("Student 2:", student2);