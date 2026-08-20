🔟 Interfaces

Now we reach one of the most important TypeScript topics.

An interface describes the shape of an object.

Example:

interface User {
  name: string;
  age: number;
  city: string;
}

Now:

const user: User = {
  name: "Aditya",
  age: 30,
  city: "Kolkata"
};

Think of an interface as a contract.

User
 │
 ├── name → string
 ├── age  → number
 └── city → string

If you violate the contract:

const user: User = {
  name: "Aditya",
  age: "30",
  city: "Kolkata"
};

❌ TypeScript error.

Optional interface property

You can combine interfaces with optional properties:

interface User {
  name: string;
  age?: number;
  city: string;
}

Then:

const user: User = {
  name: "Aditya",
  city: "Kolkata"
};

Valid.

Interface method

Interfaces can also describe functions:

interface User {
  name: string;


  greet(): string;
}

Implementation:

const user: User = {
  name: "Aditya",


  greet() {
    return `Hello ${this.name}`;
  }
};


console.log(user.greet());
1️⃣1️⃣ Type Aliases

A type alias lets you create a reusable name for a type.

type User = {
  name: string;
  age: number;
};

Then:

const user: User = {
  name: "Aditya",
  age: 30
};
Interface vs Type

This is a very common interview question.

Both can describe objects:

Interface
interface User {
  name: string;
  age: number;
}
Type
type User = {
  name: string;
  age: number;
};

For basic object structures, both work.

But type is more flexible for unions and other type expressions:

type Status =
  | "success"
  | "error"
  | "loading";

You can't define that same union directly as an interface.

Interfaces are particularly useful when you want an object contract that can be extended/declaration-merged.

For your React projects, you'll encounter both.