8️⃣ Union Types
Concept

# A union type means:
A value can be one of multiple types.
Syntax:

|

Example:
let id: number | string;
Now both are valid:
id = 100;
id = "ABC100";
But:
id = true;
❌ Error.
# Why is this useful?
Real APIs often return different formats.
For example:
let userId: number | string;
userId = 101;
userId = "USER-101";
Union with literals
# You can combine them:
 let status: "success" | "error" | "loading";
Now:
status = "success"; // ✅
status = "error";   // ✅
status = "loading"; // ✅
status = "failed";  // ❌
We'll discuss why this is called a literal type next.