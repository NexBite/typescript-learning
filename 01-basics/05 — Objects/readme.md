Create:

05-objects/
└── main.ts

Create a product:

const product: {
  id: number;
  name: string;
  brand: string;
  price: number;
  inStock: boolean;
} = {
  id: 1,
  name: "Laptop",
  brand: "Dell",
  price: 60000,
  inStock: true
};


console.log(product);
console.log(product.name);
console.log(product.price);

Try changing:

product.price = 65000;

✅ Valid.

But:

product.price = "65000";

❌ Invalid.