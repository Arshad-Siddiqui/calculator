import Operator from "./Operator";
import Clear from "./Clear";

export default function Operators({ setDisplay }: { setDisplay: Function }) {
  const operators: Array<string> = ["+", "-", "*", "/", "%"];
  return (
    <div className="operators">
      <Clear setDisplay={setDisplay} />
      {operators.map((operator) => {
        return (
          <Operator key={operator} value={operator} setDisplay={setDisplay} />
        );
      })}
    </div>
  );
}
