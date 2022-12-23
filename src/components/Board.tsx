import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";

export default function Board() {
  const [display, setDisplay] = useState(0);
  return (
    <div className="board">
      <Display children={display}/>
      <Numpad setDisplay={setDisplay}/>
    </div>
  );
}
