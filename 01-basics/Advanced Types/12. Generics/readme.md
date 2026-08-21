12. Generics
#  Concept
Generics allow us to write reusable code that works with different types while keeping type safety.
Imagine this function:
function identity(value: string): string {
  return value;
}
It works only with strings.
What if we want:
string
number
boolean
object
array
without writing a separate function for each type?
That's where Generics come in.

Basic Generic
function identity<T>(value: T): T {
  return value;
}

Here:

<T>

is a type parameter.

Think of T as:

"I don't know the type yet. You tell me when you use the function."

Example:

const name = identity<string>("Aditya");


const age = identity<number>(30);


const active = identity<boolean>(true);

TypeScript understands:

name   → string
age    → number
active → boolean
Why not use any?

You could write:

function identity(value: any): any {
  return value;
}

But any removes type safety.

Generics preserve the relationship between input and output.

function identity<T>(value: T): T {
  return value;
}
If you give:
identity<number>(100);
you get:
number
# Generic Array
function getFirst<T>(items: T[]): T {
  return items[0];
}
Now:
const firstNumber = getFirst<number>([10, 20, 30]);
const firstName = getFirst<string>([
  "Aditya",
  "Rahul"
]);

TypeScript knows:

firstNumber → number
firstName   → string
# Generic Interface
Generics aren't limited to functions.
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
Now:
interface User {
  id: number;
  name: string;
}
We can create:
const response: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Aditya"
  },
  success: true
};
This becomes very important when you start fetching APIs in React + TypeScript.
# Generic Constraint
Sometimes we don't want any type.
We can restrict the generic.
function getLength<T extends { length: number }>(
  value: T
): number {
  return value.length;
}
Now strings work:
getLength("Aditya");
Arrays work:
getLength([1, 2, 3]);
But:
getLength(100);
❌ Error because a number doesn't have length.