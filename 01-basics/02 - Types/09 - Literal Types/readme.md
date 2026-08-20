9️⃣ Literal Types

A literal type restricts a value to a specific exact value.
Instead of:
let role: string;
you can say:
let role: "admin" | "user";
Now:
role = "admin"; // ✅
role = "user";  // ✅
But:
role = "manager";
❌ Error.
# Real-world example
Suppose an order can have only these statuses:
type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

Then:
let orderStatus: OrderStatus;
orderStatus = "pending";
orderStatus = "shipped";
orderStatus = "delivered";
But:
orderStatus = "completed";
❌ Error.
This is very useful in real applications.