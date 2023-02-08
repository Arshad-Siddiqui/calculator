import { evaluate } from "mathjs";

export default function Equals({
  setDisplay,
}: {
  display: string[];
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => {
      if (prev.length === 0) return [];
      if (prev[prev.length - 1] === "+" || prev[prev.length - 1] === "-") {
        return [...prev, "0"];
      }

      if (prev[prev.length - 1] === "*" || prev[prev.length - 1] === "/") {
        return [...prev, "1"];
      }

      if (prev[prev.length - 1] === ".") {
        return [...prev, "0"];
      }

      return [evaluate(prev.join(""))];
    });
  };
  return (
    <button className="equal" onClick={handleClick}>
      =
    </button>
  );
}
