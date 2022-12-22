export default class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  divide(a: number, b: number) {
    return a / b;
  }

  square(a: number) {
    return a * a;
  }

  squareRoot(a: number) {
    return Math.sqrt(a);
  }

  cube(a: number) {
    return a * a * a;
  }

  cubeRoot(a: number) {
    return Math.cbrt(a);
  }

  power(a: number, b: number) {
    return Math.pow(a, b);
  }
}