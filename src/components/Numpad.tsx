import Button from "./Button";
import contents from "../data/ButtonContents.json";
import NumpadProps from "../types/NumpadProps";

export default function Numpad ({ setDisplay }: NumpadProps) {

  return (
    <div className="numpad">
      {contents.map((content, index) => {
        return (
          <Button key={index} setDisplay={setDisplay} >
            {content}
          </Button>
        );
      })}
    </div>
  );
}