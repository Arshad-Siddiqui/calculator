import DisplayProps from "../types/displayProps"

export default function Display (props: DisplayProps) {
  return (
    <div className="display">
      {props.children.join('') || 0}
    </div>
  )
}