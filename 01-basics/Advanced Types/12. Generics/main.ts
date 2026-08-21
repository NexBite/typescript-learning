function indentity<T>(value: T): T {
  return value;
}
console.log(indentity);

// Generic Array
const firstNumber = getFirst<number>([10, 20, 30]);

const firstName = getFirst<string>([
  "Aditya",
  "Rahul"
]);