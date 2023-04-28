import { evaluate } from "mathjs";

export default function Equals({
  display,
  setDisplay,
}: {
  display: string[];
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => {
      if (display[0] == "Error") return ["0"];

      try {
        evaluate(prev.join(""));
      } catch (e) {
        return ["Error"];
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
