// app.test.js
const sayHello = require("./app");

test("kelmbalikan salam yang benar", () => {
  const result = sayHello();
  expect(result).toBe("Hello, World!");
});
