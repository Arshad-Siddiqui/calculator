import ButtonProps from "../types/buttonProps";
import { combineNumbers } from "../lib/formatNumbers";
import buttonStyle from "../lib/buttonStyle";
import validEquation from "../lib/validEquation";
import { operatorToString } from "../lib/formatNumbers";

export default function Button({
  children,
  setDisplay,
  display,
  calculator,
}: ButtonProps) {
  const handleClick = () => {
    if (
      (typeof children == "string" &&
        typeof display[display.length - 1] == "string") ||
      children == "AC"
    ) {
      // Resets the calculator in case of a double operator
      setDisplay([]);
      return;
    }

    if (children == "=") {
      const isValidEquation: boolean = validEquation(display);
      if (!isValidEquation) {
        setDisplay([]);
        return;
      }

      const [num1, operator, num2] = display;

      if (
        operator != "+" &&
        operator != "-" &&
        operator != "/" &&
        operator != "X"
      ) {
        console.error("Invalid operator");
        return false;
      }
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
      const result: number = calculator[stringOperator](num1, num2);
      setDisplay([result]);
      return;
    }

    setDisplay((prev) => combineNumbers([...prev, children]));
    console.log(display);
  };

  const optionalStyles = buttonStyle(children);
  return (
    <button className={`button ${optionalStyles}`} onClick={handleClick}>
      {children}
    </button>
  );
}
