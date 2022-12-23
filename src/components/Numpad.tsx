import Button from "./Button";
import contents from "../data/ButtonContents.json";
import NumpadProps from "../types/NumpadProps";

export default function Numpad ({ setDisplay }: NumpadProps) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="numpad">
      {contents.map((content, index) => {
        return (
          <Button key={index} onClick={handleClick} setDisplay={setDisplay} >
            {content}
          </Button>
        );
      })}
    </div>
  );
}