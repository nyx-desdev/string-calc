export class Calculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    
    // Convert escaped newline characters (\n) to actual newline characters
    const normalizedInput = this.normalizeInput(numbers);
    const { delimiters, cleanNumbers } = this.extractDelimitersAndNumbers(normalizedInput);
    
    this.validateInput(cleanNumbers, delimiters);
    const nums = this.parseNumbers(cleanNumbers, delimiters);
    this.validateNegatives(nums);

    return this.calculateResult(nums, delimiters);
  }

  private normalizeInput(numbers: string): string {
    return numbers.replace(/\\n/g, "\n");
  }

  private validateInput(cleanNumbers: string, delimiters: string[]): void {
    const validInputRegex = new RegExp(`^[0-9${delimiters.join("")}-]+$`);
    if (!validInputRegex.test(cleanNumbers)) {
      throw new Error("Invalid format");
    }
  }

  private parseNumbers(cleanNumbers: string, delimiters: string[]): number[] {
    return cleanNumbers
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map(Number);
  }

  private validateNegatives(nums: number[]): void {
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  }

  private calculateResult(nums: number[], delimiters: string[]): number {
    if (delimiters.includes("*")) {
      return nums.reduce((acc, num) => acc * num, 1);
    }
    return nums.reduce((acc, num) => acc + num, 0);
  }

  private extractDelimitersAndNumbers(numbers: string): {
    delimiters: string[];
    cleanNumbers: string;
  } {
    const delimiterMatch = numbers.match(/^\/\/([^0-9\n])\n/);
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
