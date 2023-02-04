export default function Display (props: {display: (string)[]}) {
  return (
    <div className="display">
      {props.display.join('') || 0}
    </div>
  )
}