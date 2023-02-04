import { evaluate } from "mathjs";

export default function Equals({
  setDisplay,
}: {
  display: string[];
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => [evaluate(prev.join(""))]);
  };
  return <button onClick={handleClick}>=</button>;
}
