import DisplayProps from "../types/DisplayProps"

export default function Display (props: DisplayProps) {
  return (
    <div className="display">
      {props.children.join('')}
    </div>
  )
}