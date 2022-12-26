import Button from "./Button";
import contents from "../data/ButtonContents.json";
import NumpadProps from "../types/NumpadProps";
import Calculator from "../lib/Calculator";

export default function Numpad ({ setDisplay, display }: NumpadProps) {
  const calculator = new Calculator();
  
  return (
    <div className="numpad">
      {contents.map((content, index) => {
        return (
          <Button key={index} setDisplay={setDisplay} display={display} calculator={ calculator }>
            {content}
          </Button>
        );
      })}
    </div>
  );
}