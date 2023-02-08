import Clear from "./Clear"
import Operator from "./Operator"

export default function Top ({ setDisplay }: { setDisplay: Function }) {
  const values: Array<string> = ["(", ")", "%"]
  return (
    <div className="top">
      {values.map((value) => {
        return <Operator key={value} value={value} setDisplay={setDisplay} />
      })}
      <Clear setDisplay={setDisplay} />
    </div>
  )
}