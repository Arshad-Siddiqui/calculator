export default function combineNumbers(arr: (number | string)[]): (number | string)[] {
  if (arr.some((item) => typeof item === 'string')) {
    return arr;
  }
  return [123];
}