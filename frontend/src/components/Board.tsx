import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";
import Operators from "./Operators";

export default function Board() {
  const [display, setDisplay] = useState<(string)[]>([]);
  return (
    <div className="board">
      <Display children={display}/>
      <Numpad setDisplay={setDisplay} display={display}/>
      <Operators />
    </div>
  );
}
