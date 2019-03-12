const lib = require("../lib");

test("absolute - should output postive num if input num is positive", () => {
  const output = lib.absolute(1);
  expect(output).toBe(1);
});

test("absolute - should output postive num if input num is negative", () => {
  const output = lib.absolute(-1);
  expect(output).toBe(1);
});

test("absolute - should output 0 if input num is 0", () => {
  const output = lib.absolute(0);
  expect(output).toBe(0);
});
