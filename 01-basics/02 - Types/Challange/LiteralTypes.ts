type  paymentMethod =
| "cash"
| "card"
| "upi";

let payment: paymentMethod;

// Valid assignments

payment = "cash";
payment = "card";
payment = "upi";

// Invalid assignment

// payment = "paypal";

console.log(payment);