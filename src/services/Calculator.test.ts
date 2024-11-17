import { expect, test, describe, beforeEach } from "vitest";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("empty string returns 0", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("single number returns the number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("two numbers returns their sum", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("handles newlines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("throws error for invalid delimiter format", () => {
    expect(() => calculator.add("//;1;2")).toThrow("Invalid format");
  });

  test("throws error for invalid delimiter format", () => {
    expect(() => calculator.add("//1,2")).toThrow("Invalid format");
  });

  test("throws error for invalid delimiter format", () => {
    expect(() => calculator.add("//\n1,2")).toThrow("Invalid format");
  });

  test("throws error for negative numbers", () => {
    expect(() => calculator.add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => calculator.add("-1,-2,3,-4")).toThrow(
      "negative numbers not allowed -1,-2,-4"
    );
  });
});
