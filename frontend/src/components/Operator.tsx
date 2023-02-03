export default function Operator ({ value }: { value: string}) {
  const handleClick = () => {}

  return (
    <button onClick={handleClick}>{value}</button>
  );
}