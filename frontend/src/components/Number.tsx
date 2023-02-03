export default function Number ({ value }: { value: string}) {
  const handleClick = () => {}

  return (
    <button onClick={handleClick}>{value}</button>
  );
}