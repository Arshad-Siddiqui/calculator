import Button from "./Button";
import contents from "../data/ButtonContents.json";

export default function Numpad () {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="numpad">
      {contents.map((content, index) => {
        return (
          <Button key={index} onClick={onClick}>
            {content}
          </Button>
        );
      })}
    </div>
  );
}