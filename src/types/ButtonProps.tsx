export default interface ButtonProps {
  children: number | string;
  setDisplay: (value: React.SetStateAction<(string|number)[]>) => void;
  display: (string|number)[];
}