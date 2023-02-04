import Number from "./Number";
import Button from "./Button";
import Clear from "./Clear";

export default function Numpad ({ setDisplay, display }: { setDisplay: Function, display: (string)[]}) {
  
  const numbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const equals: string = '='
  
  return (
    <div className="numpad">
      {
        numbers.map((number) => {
          return (
            <Number
              key={number}
              value={number}
              setDisplay={setDisplay}
            />
          )
        })
        }
        <Clear setDisplay={setDisplay} />
        <Button value={equals} />
    </div>
  );
}