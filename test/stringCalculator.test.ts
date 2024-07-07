import { add } from "../utils/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test('should return 1 for a string "1"', () => {
    expect(add("1")).toBe(1);
  });

  test('should return 9 for a string "9"', () => {
    expect(add("9")).toBe(9);
  });

  test('should return 1 for a string "1,0"', () => {
    expect(add("1,0")).toBe(1);
  });

  test('should return 134 for a string "1,133"', () => {
    expect(add("1,133")).toBe(134);
  });

  test('should return 18 for a string "5,6,7"', () => {
    expect(add("5,6,7")).toBe(18);
  });

  test('should return 18 for a string "5\\n6\\n7"', () => {
    expect(add("5\n6\n7")).toBe(18);
  });

  test('should return 18 for a string "5;6;7" with delimiter ";"', () => {
    expect(add("//;\n5;6;7")).toBe(18);
  });

  test("should throw an error for a string with negative numbers", () => {
    expect(() => add("//;\n-5;6;7")).toThrow("negative numbers not allowed -5");
  });

  test("should throw an error for a string with multiple negative numbers", () => {
    expect(() => add("//;\n-5;-6;7")).toThrow(
      "negative numbers not allowed -5, -6"
    );
  });
});
