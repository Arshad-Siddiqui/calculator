export default interface NumpadProps {
  setDisplay: (value: React.SetStateAction<(string|number)[]>) => void;
}