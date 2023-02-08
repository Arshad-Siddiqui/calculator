export default function Number({
  value,
  setDisplay,
}: {
  value: string;
  setDisplay: Function;
}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => [...prev, value]);
    console.log(value);
  };

  const isZero = value === "0" ? "zero" : "";
  return <button className={isZero} onClick={handleClick}>{value}</button>;
}
