import Button from "./Button";
import contents from "../data/ButtonContents.json";

export default function Board() {
  
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="board">
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
