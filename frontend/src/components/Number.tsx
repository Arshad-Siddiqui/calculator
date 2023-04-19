export default function Number({
  value,
  setDisplay,
  display,
}: {
  value: string;
  display: string[];
  setDisplay: Function;
}) {
  const handleClick = () => {
    if (display[0] == "Error") return setDisplay([value]);

    setDisplay((prev: string[]) => [...prev, value]);
    console.log(value);
  };

  return <button onClick={handleClick}>{value}</button>;
}
