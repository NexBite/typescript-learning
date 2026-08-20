interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Product 1
const product1: Product = {
  id: 1,
  name: "Wireless Mouse",
  price: 799,
  inStock: true
};

// Product 2
const product2: Product = {
  id: 2,
  name: "Mechanical Keyboard",
  price: 2499,
  inStock: false
};

// Product 3
const product3: Product = {
  id: 3,
  name: "USB-C Hub",
  price: 1299,
  inStock: true
};

// Grouping into an array typed as Product[]
const products: Product[] = [product1, product2, product3];

console.log(products);