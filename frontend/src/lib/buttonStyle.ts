export default function buttonStyle(child: string | number) {
  const isTall = child == '+' ? 'plus' : ''
  const isEqual = child == '=' ? 'equal' : ''
  const isWide = child == 'AC' ? 'ac' : ''
  
  return `${isTall} ${isEqual} ${isWide}`
}