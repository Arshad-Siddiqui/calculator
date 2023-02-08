export default function Operator({
  value,
  setDisplay,
}: {
  value: string;
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => {
      if (prev[prev.length - 1] === "/" || prev[prev.length - 1] === "*") {
        return [...prev.slice(0, -1), value];
      }

      return [...prev, value];
    });
  };

  const isPlus = value === "+" ? "plus" : "";
  return (
    <button onClick={handleClick} className={`operator ${isPlus}`}>
      {value}
    </button>
  );
}
