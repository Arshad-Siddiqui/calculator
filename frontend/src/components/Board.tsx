import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";
import Operators from "./Operators";

export default function Board() {
  const [display, setDisplay] = useState<(string)[]>([]);
  return (
    <div className="board">
      <Display display={display}/>
      <Operators setDisplay={setDisplay} />
      <Numpad setDisplay={setDisplay} display={display}/>
    </div>
  );
}
