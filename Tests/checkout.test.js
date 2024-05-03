const checkout = require("../checkout.js");

describe("checkout - happy paths", () => {
  test("returns 0 for an empty array", () => {
    const input = [];
    const output = checkout(input);

    const expectedOutput = 0;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a single item with no offer", () => {
    const input = [
      {
        code: "C",
        quantity: 1,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 25;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for multiples of single item with no offer", () => {
    const input = [
      {
        code: "C",
        quantity: 3,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 75;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for two single items with no offer", () => {
    const input = [
      {
        code: "C",
        quantity: 1,
      },
      {
        code: "D",
        quantity: 1,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 37;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for multiple items with no offer", () => {
    const input = [
      {
        code: "C",
        quantity: 3,
      },
      {
        code: "D",
        quantity: 2,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 99;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a single item with an ineligible offer", () => {
    const input = [
      {
        code: "A",
        quantity: 1,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 50;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a single item with an eligble offer", () => {
    const input = [
      {
        code: "A",
        quantity: 3,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 140;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a single item with a partly eligible offer", () => {
    const input = [
      {
        code: "A",
        quantity: 4,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 190;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a multiple items with eligible offers", () => {
    const input = [
      {
        code: "A",
        quantity: 3,
      },
      {
        code: "B",
        quantity: 6,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 320;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a multiple items with partly eligible offers", () => {
    const input = [
      {
        code: "A",
        quantity: 4,
      },
      {
        code: "B",
        quantity: 7,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 405;

    expect(output).toEqual(expectedOutput);
  });
  test("returns the subtotal for a multiple items with multiple offers", () => {
    const input = [
      {
        code: "A",
        quantity: 4,
      },
      {
        code: "B",
        quantity: 7,
      },
      {
        code: "C",
        quantity: 2,
      },
      {
        code: "D",
        quantity: 1,
      },
    ];
    const output = checkout(input);

    const expectedOutput = 467;

    expect(output).toEqual(expectedOutput);
  });
});

describe('checkout - sad paths', ()=>{
  test('returns an error for a non-array parameter', ()=>{
    const input = "hello"

    expect(()=>{
      checkout(input)
    }).toThrow("Error: Parameter is not an array!")
  })
  test('returns an error for an item without required properties', ()=>{
    const input = [{"banana": 1}]

    expect(()=>{
      checkout(input)
    }).toThrow("Error: Parameter is not an array!")
  })
})