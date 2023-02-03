import ButtonProps from "../types/buttonProps";

export default function Button({
  children,
}: ButtonProps) {
  const handleClick = () => {}

  return (
    <button  onClick={handleClick}>
      {children}
    </button>
  );
}
