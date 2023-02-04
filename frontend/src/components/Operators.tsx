import Operator from "./Operator";

export default function Operators({ setDisplay }: { setDisplay: Function }) {
  const operators: Array<string> = ["+", "-", "*", "/", "%"];
  return (
    <div className="operators">
      {operators.map((operator) => {
        return (
          <Operator key={operator} value={operator} setDisplay={setDisplay} />
        );
      })}
    </div>
  );
}
