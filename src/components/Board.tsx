import Button from './Button'

export default function Board () {
  const onClick = () => {
    console.log("clicked")
  }


  return (
    <div className="board">
      <Button children={1} onClick={onClick}/>
    </div>
  )
}