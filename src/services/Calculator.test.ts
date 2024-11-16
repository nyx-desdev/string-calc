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

  test('single number returns the number', () => {
    expect(calculator.add('1')).toBe(1);
  });
});
