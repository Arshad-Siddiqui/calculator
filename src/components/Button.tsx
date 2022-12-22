import ButtonProps from "../types/ButtonProps"

export default function Button (props: ButtonProps) {
  const children = props.children
  const isTall = children == '+' ? 'plus' : ''

  return (
    <button className={`button ${isTall}`} onClick={props.onClick}>
      {children}
    </button>
  )
}