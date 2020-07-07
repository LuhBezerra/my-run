export function rawValue(value){
  const one = value.replace("R$ ", "")
  const two = one.replace(" ", "")

  return parseFloat(two)
}