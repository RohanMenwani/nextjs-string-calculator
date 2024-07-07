export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
  let delimiter = ",";
  if (delimiterMatch) {
    delimiter = delimiterMatch[1];
    numbers = numbers.slice(delimiterMatch[0].length);
  }

  numbers = numbers.replace(/\n/g, delimiter);
  const numArray = numbers.split(delimiter);

  const negatives = numArray.filter((num) => parseInt(num, 10) < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
