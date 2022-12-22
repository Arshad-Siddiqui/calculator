import Numpad from "./Numpad";
import Display from "./Display";

export default function Board() {
  return (
    <div className="board">
      <Display children={0}/>
      <Numpad />
    </div>
  );
}
