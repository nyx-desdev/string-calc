export class Calculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    const { delimiters, cleanNumbers } = this.parseDelimiters(numbers);
    
    const nums = cleanNumbers
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map(Number);
    
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((acc, num) => acc + num, 0);
  }

  private parseDelimiters(numbers: string): {
    delimiters: string[];
    cleanNumbers: string;
  } {
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    let delimiters = [",", "\n"];

    if (numbers.startsWith("//")) {
      if (!delimiterMatch) {
        throw new Error("Invalid format");
      }
      delimiters.push(delimiterMatch[1]);
      numbers = numbers.replace(delimiterMatch[0], "");
    }

    return { delimiters, cleanNumbers: numbers };
  }
}
