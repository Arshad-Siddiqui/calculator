export const operatorToString = {
  '+': 'add',
  '-': 'subtract',
  'X': 'multiply',
  '/': 'divide',
}

export function combineNumbers(arr: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  let currentNumber: number | null = null;

  for (const item of arr) {
    if (typeof item === 'number') {
      if (currentNumber === null) {
        currentNumber = item;
      } else {
        currentNumber = currentNumber * 10 + item;
      }
    } else {
      if (currentNumber !== null) {
        result.push(currentNumber);
        currentNumber = null;
      }

      result.push(item);
    }
  }

  if (currentNumber !== null) {
    result.push(currentNumber);
  }

  return result;
}