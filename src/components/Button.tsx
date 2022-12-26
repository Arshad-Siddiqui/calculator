import ButtonProps from "../types/ButtonProps"
import combineNumbers from "../lib/combineNumbers"
import operatorToString from "../lib/operatorToString"

export default function Button ({ children, setDisplay, display, calculator }: ButtonProps) {
  const isTall = children == '+' ? 'plus' : ''
  const isEqual = children == '=' ? 'equal' : ''

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
      if (display[1] != '+' && display[1] != '-' && display[1] != 'x' && display[1] != '/') return console.error('Invalid operator')

      const [num1, operator, num2] = display

      const result = calculator[operatorToString[operator]](num1, num2)
      setDisplay([result])
      return;
    }

    setDisplay((prev) => combineNumbers([...prev, children]))
    console.log(display);
  }

  return (
    <button className={`button ${isTall} ${isEqual}`} onClick={handleClick}>
      {children}
    </button>
  )
}