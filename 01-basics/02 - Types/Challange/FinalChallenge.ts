// 1. Literal Types & Union Types
type OrderStatus = "pending" | "processing" | "shipped" | "delivered";
type PaymentMethod = "cash" | "card" | "upi";

// 2. Interface (Type Alias) combining union types and an optional property
interface Order {
  id: string | number;         // Union Type (string or number)
  customerName: string;
  amount: number;
  status: OrderStatus;         // Literal Union Type
  paymentMethod: PaymentMethod; // Literal Union Type
  discountCode?: string;       // Optional Property
}

// Order 1: discountCode omitted, numeric ID
const order1: Order = {
  id: 1001,
  customerName: "Rahul Das",
  amount: 1499,
  status: "pending",
  paymentMethod: "upi"
};

// Order 2: discountCode included, string ID
const order2: Order = {
  id: "ORD-2026-X8",
  customerName: "Sneha Roy",
  amount: 2999,
  status: "shipped",
  paymentMethod: "card",
  discountCode: "FESTIVE10"
};

console.log("Order 1:", order1);
console.log("Order 2:", order2);