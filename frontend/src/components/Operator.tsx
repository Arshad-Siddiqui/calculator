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

  return <button onClick={handleClick}>{value}</button>;
}
