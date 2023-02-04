export default function Number ({ value, setDisplay }: { value: string, setDisplay: Function}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => [...prev, value])
    console.log(value)
  }
    
  return (
    <button onClick={handleClick}>{value}</button>
  );
}