export default function Clear ({setDisplay}: { setDisplay: Function}) {
  const handleClick = () => {
    setDisplay((prev: string[]) => [])
  }
  return (
    <button onClick={handleClick}>C</button>
  );
}