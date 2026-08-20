Finally:

06-functions/
└── main.ts

Create:

Addition
function add(a: number, b: number): number {
  return a + b;
}


console.log(add(10, 20));

Output:

30
Greeting
function greet(name: string): string {
  return `Hello ${name}`;
}


console.log(greet("Aditya"));

Output:

Hello Aditya
Calculate total
function calculateTotal(
  price: number,
  quantity: number
): number {
  return price * quantity;
}


console.log(calculateTotal(500, 3));

Output:

1500