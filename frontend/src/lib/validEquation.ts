import { operatorToString } from "./formatNumbers";

export default function validEquation(display: (string | number)[]): boolean {
  if (display.length != 3) {
    console.error("Invalid equation length");
    return false;
  }
  if (
    display[1] != "+" &&
    display[1] != "-" &&
    display[1] != "X" &&
    display[1] != "/"
  ) {
    console.error("Invalid operator");
    return false;
  }

  const [num1, operator, num2] = display;

  const stringOperator = operatorToString[operator];
  if (
    stringOperator != "add" &&
    stringOperator != "subtract" &&
    stringOperator != "divide" &&
    stringOperator != "multiply"
  ) {
    console.error("Invalid operator");
    return false;
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    console.error("Invalid number");
    return false;
  }

  return true;
}
