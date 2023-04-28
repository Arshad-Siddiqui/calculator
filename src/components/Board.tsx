import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";

export default function Board() {
  const [display, setDisplay] = useState<(string)[]>([]);
  return (
    <div className="board">
      <Display display={display}/>
      <Buttons display={display} setDisplay={setDisplay} />
    </div>
  );
}
