import ButtonProps from "../types/ButtonProps"
import combineNumbers from "../lib/combineNumbers"

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

    setDisplay((prev) => combineNumbers([...prev, children]))
    console.log(display);
  }

  return (
    <button className={`button ${isTall} ${isEqual}`} onClick={handleClick}>
      {children}
    </button>
  )
}