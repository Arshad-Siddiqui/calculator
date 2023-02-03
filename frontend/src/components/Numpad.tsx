import Number from "./Number";
import Button from "./Button";

export default function Numpad ({ setDisplay, display }: { setDisplay: Function, display: (string)[]}) {
  
  const numbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const clear: string= 'C'
  const equals: string = '='
  
  
  return (
    <div className="numpad">
      {
        numbers.map((number) => {
          return (
            <Number
              key={number}
              value={number}
            />
          )
        })
        }
        <Button value={clear} />
        <Button value={equals} />
    </div>
  );
}