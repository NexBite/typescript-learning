Create:

04-arrays/
└── main.ts

Practice:

const numbers: number[] = [10, 20, 30, 40];


const names: string[] = [
  "Aditya",
  "Rahul",
  "Amit"
];


const statuses: boolean[] = [
  true,
  false,
  true
];


console.log(numbers);
console.log(names);
console.log(statuses);

Then practice:

numbers.push(50);


names.push("Rohit");


console.log(numbers);
console.log(names);

Try this intentionally:

numbers.push("Hello");

❌ TypeScript should reject it.