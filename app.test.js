// app.test.js
const sayHello = require("./app");

test("returns the correct greeting", () => {
  const result = sayHello();
  expect(result).toBe("Hello, world!");
});
