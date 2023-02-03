import Button from "./Button";
import contents from "../data/ButtonContents.json";
import NumpadProps from "../types/numpadProps";

export default function Numpad ({ setDisplay, display }: NumpadProps) {
  return (
    <div className="numpad">
      {contents.map((content, index) => {
        return (
          <Button key={index} setDisplay={setDisplay} display={display} >
            {content}
          </Button>
        );
      })}
    </div>
  );
}