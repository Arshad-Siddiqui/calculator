import Button from "./Button";

export default function Board() {
  const contents = [
    "C",
    "AC",
    "%",
    "X",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
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
