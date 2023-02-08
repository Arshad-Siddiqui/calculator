import Calculator from '../lib/Calculator';

export default interface ButtonProps {
  children: number | string;
  setDisplay: (value: React.SetStateAction<(string|number)[]>) => void;
  display: (string|number)[];
  calculator: Calculator;
}