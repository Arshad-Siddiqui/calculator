import ButtonProps from "../types/ButtonProps"

export default function Button (props: ButtonProps) {
  const children = props.children
  const isTall = children == '+' ? 'plus' : ''
  const isEqual = children == '=' ? 'equal' : ''

  const handleClick = () => {
    props.setDisplay([children])
  }

  return (
    <button className={`button ${isTall} ${isEqual}`} onClick={handleClick}>
      {children}
    </button>
  )
}