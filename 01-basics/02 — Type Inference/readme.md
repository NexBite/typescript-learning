What is Type Inference?

With type annotations, we tell TypeScript the type:

let age: number = 30;

With type inference, TypeScript figures it out automatically:

let age = 30;

TypeScript understands:

age → number
Example

Create main.ts:

const name = "Aditya";
const age = 30;
const city = "Kolkata";
const isStudent = true;


console.log(name);
console.log(age);
console.log(city);
console.log(isStudent);

Notice that we didn't write:

:string
:number
:boolean

TypeScript infers them.