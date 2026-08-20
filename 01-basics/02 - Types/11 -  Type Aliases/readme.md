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