import ButtonProps from "../types/buttonProps"
import { combineNumbers, operatorToString } from "../lib/formatNumbers"
import buttonStyle from "../lib/buttonStyle"

export default function Button ({ children, setDisplay, display, calculator }: ButtonProps) {

  const handleClick = () => {
    if (typeof children == 'string' && typeof display[display.length - 1] == 'string') {
      // Resets the calculator in case of a double operator
      setDisplay([])
      return
    }

    if (children == 'C' || children == 'AC') {
      setDisplay([])
      return
    }

    if (children == '=') {
      if (display.length != 3) return console.error('Invalid equation length')
      if (display[1] != '+' && display[1] != '-' && display[1] != 'X' && display[1] != '/') return console.error('Invalid operator')

      const [num1, operator, num2] = display

      const stringOperator = operatorToString[operator]
      if (stringOperator != 'add' && stringOperator != 'subtract' && stringOperator != 'divide' && stringOperator != 'multiply') return console.error('Invalid operator')

      if (typeof num1 != 'number' || typeof num2 != 'number') return console.error('Invalid number');

      const result = calculator[stringOperator](num1, num2)
      setDisplay([result])
      return;
    }

    setDisplay((prev) => combineNumbers([...prev, children]))
    console.log(display);
  }

  const optionalStyles = buttonStyle(children)
  return (
    <button className={`button ${optionalStyles}`} onClick={handleClick}>
      {children}
    </button>
  )
}