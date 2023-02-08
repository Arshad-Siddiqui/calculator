import Numpad from "./Numpad";
import Operators from "./Operators";
import Top from "./Top";

export default function Buttons({
  setDisplay,
  display,
}: {
  setDisplay: Function;
  display: string[];
}) {
  return (
    <div className="buttons">
      <Top setDisplay={setDisplay} />
      <div className="bottom">
        <Numpad setDisplay={setDisplay} display={display} />
        <Operators setDisplay={setDisplay} />
      </div>
    </div>
  );
}
