export default function Operator({
  value,
  setDisplay,
}: {
  value: string;
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => [...prev, value]);
  };

  const isPlus = value === "+" ? "plus" : "";
  return (
    <button onClick={handleClick} className={`operator ${isPlus}`} >
      {value}
    </button>
  );
}
