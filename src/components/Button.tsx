import ButtonProps from "../types/ButtonProps"
import combineNumbers from "../lib/combineNumbers"

export default function Button (props: ButtonProps) {
  const children = props.children
  const setDisplay = props.setDisplay
  const display = props.display

  const isTall = children == '+' ? 'plus' : ''
  const isEqual = children == '=' ? 'equal' : ''

  const handleClick = () => {
    if (typeof children == 'string' && typeof display[display.length - 1] == 'string') {
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