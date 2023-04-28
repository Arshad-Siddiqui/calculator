export default function Clear({ setDisplay }: { setDisplay: Function }) {
  const handleClick = () => {
    setDisplay((prev: string[]) => []);
  };
  return <button className="clear" onClick={handleClick}>C</button>;
}
