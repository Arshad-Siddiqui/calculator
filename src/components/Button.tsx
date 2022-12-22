import ButtonProps from "../types/ButtonProps"

export default function Button (props: ButtonProps) {
  const children = props.children

  return (
    <button className={`button ${children == '+' && 'plus'}`} onClick={props.onClick}>
      {children}
    </button>
  )
}