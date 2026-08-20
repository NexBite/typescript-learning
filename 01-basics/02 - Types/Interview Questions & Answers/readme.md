# Q1. What is an optional property?
Answer:
An optional property is a property that may or may not exist on an object. It is declared using ?.
interface User {
  name: string;
  age?: number;
}
# Q2. What is a union type?
Answer:
A union type allows a variable to contain values of multiple specified types.
let id: string | number;

id = 10;
id = "USER-10";
# Q3. What is a literal type?
Answer:
A literal type restricts a value to a specific exact value.
let direction: "left" | "right";
direction = "left"; // valid
direction = "up";   // error
Q4. What is an interface?
Answer:
An interface defines the structure or contract of an object.
interface Product {
  id: number;
  name: string;
  price: number;
}
# Q5. What is a type alias?
Answer:
A type alias creates a reusable name for a type.
type User = {
  name: string;
  age: number;
};
# Q6. Interface vs Type?
Short interview answer:
Both can describe object structures. Interfaces are commonly used for object contracts and can be extended/declaration-merged, while type aliases can represent objects as well as unions, intersections, tuples, and other type expressions.

# Q7. Can an interface have optional properties?
Yes.
interface Product {
  name: string;
  description?: string;
}
# Q8. Can union types contain literal types?
Absolutely.
type Status =
  | "success"
  | "error"
  | "loading";

This is actually a very common TypeScript pattern.