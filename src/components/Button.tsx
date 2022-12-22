import ButtonProps from "../types/ButtonProps"

export default function Button (props: ButtonProps) {
  const children = props.children
  const isTall = children == '+' ? 'plus' : ''
  const isEqual = children == '=' ? 'equal' : ''

  return (
    <button className={`button ${isTall} ${isEqual}`} onClick={props.onClick}>
      {children}
    </button>
  )
}