import Numpad from "./Numpad";
import Operators from "./Operators";

export default function Buttons ({setDisplay, display}: {setDisplay: Function, display: string[]}) {
  return (
    <div className="buttons">
      <Numpad setDisplay={setDisplay} display={display} />
      <Operators setDisplay={setDisplay}/>
    </div>
  );
}

