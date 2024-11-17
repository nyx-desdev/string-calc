export class Calculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    const { delimiters, cleanNumbers } = this.parseDelimiters(numbers);

    return cleanNumbers
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
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
