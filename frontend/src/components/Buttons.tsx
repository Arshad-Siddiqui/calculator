import Numpad from "./Numpad";
import Operators from "./Operators";

export default function Buttons ({setDisplay, display}: {setDisplay: Function, display: string[]}) {
  return (
    <div className="buttons">
      <Operators setDisplay={setDisplay}/>
      <Numpad setDisplay={setDisplay} display={display} />
    </div>
  );
}

