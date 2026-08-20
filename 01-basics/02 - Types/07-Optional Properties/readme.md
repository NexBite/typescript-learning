7️⃣ Optional Properties
Concept

Sometimes an object property is not required.

JavaScript:

const user1 = {
  name: "Aditya",
  age: 30
};


const user2 = {
  name: "Rahul"
};

age exists in user1, but not user2.

In TypeScript, use ?:

type User = {
  name: string;
  age?: number;
};

Now both are valid:

const user1: User = {
  name: "Aditya",
  age: 30
};


const user2: User = {
  name: "Rahul"
};
? means:
age?
 ↓
optional property
It means the property can be present or absent.
Important
Optional doesn't mean:
age → number OR string
It effectively means:
age → number | undefined
Example:
console.log(user2.age);
The result can be:
undefined
# React example
This is extremely common with props:
type UserProps = {
  name: string;
  age?: number;
};

function User({ name, age }: UserProps) {
  return (
    <div>
      <h2>{name}</h2>


      {age && <p>Age: {age}</p>}
    </div>
  );
}

Usage:

<User name="Aditya" />

or:

<User name="Aditya" age={30} />

Both work.