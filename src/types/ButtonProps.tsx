export default interface ButtonProps {
  onClick: () => void
  children: number | string;
  setDisplay: (value: (number|string)[]) => void;
}