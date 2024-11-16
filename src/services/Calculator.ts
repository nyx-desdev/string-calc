export class Calculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    return numbers
      .split(/[\s,]+/)
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
  }
}
