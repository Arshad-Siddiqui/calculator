import Button from "./Button";

export default function Numpad () {
  
  const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const operators: Array<string> = ['+', '-', '*', '/', "%"]
  const clear: Array<string> = ['C']
  const equals: Array<string> = ['=']
  
  
  return (
    <div className="numpad">
      {
        numbers.map((number) => {
          return (
            <Button
              key={number}
              value={number}
            />
          )
        })
        }
    </div>
  );
}