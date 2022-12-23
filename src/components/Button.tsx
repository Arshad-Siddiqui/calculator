import ButtonProps from "../types/ButtonProps"

export default function Button (props: ButtonProps) {
  const children = props.children
  const setDisplay = props.setDisplay

  const isTall = children == '+' ? 'plus' : ''
  const isEqual = children == '=' ? 'equal' : ''

  const handleClick = () => {
    if (children == 'C' || children == 'AC') {
      setDisplay([])
      return
    }

    setDisplay((prev) => [...prev, children])
  }

  return (
    <button className={`button ${isTall} ${isEqual}`} onClick={handleClick}>
      {children}
    </button>
  )
}