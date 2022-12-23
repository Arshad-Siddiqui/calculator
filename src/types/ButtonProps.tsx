export default interface ButtonProps {
  children: number | string;
  setDisplay: (value: (number|string)[]) => void;
}