const lib = require("../lib");

// group test numbers
describe("absolute", () => {
  test("should output positive num if input num is positive", () => {
    const output = lib.absolute(1);
    expect(output).toBe(1);
  });

  test("should output positive num if input num is negative", () => {
    const output = lib.absolute(-1);
    expect(output).toBe(1);
  });

  test("should output 0 if input num is 0", () => {
    const output = lib.absolute(0);
    expect(output).toBe(0);
  });
});

// strings
describe("greet", () => {
  it("should return the greeting to frank", () => {
    // expect(lib.greet("frank")).toMatch(/frank/);
    expect(lib.greet("frank")).toContain("frank");
  });
});

// arrays
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    // Too General  expect(result).toBeDefined(); expect(result).not.toBeNull();
    // Too Specific expect(result.length).toBe(3)
    // Just Right
    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

// object
describe("getProduct", () => {
  it("should return a product with a given id", () => {
    const result = lib.getProduct(1);
    // too specific expect(result).toEqual({ id: 1, price: 10 });
    // Just right
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

// exceptions
describe("registeredUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach(a => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });
  it("should return a user if a valid username is passed", () => {
    const result = lib.registerUser("frank");
    expect(result).toMatchObject({ username: "frank" });
    expect(result.id).toBeGreaterThan(0);
  });
});
