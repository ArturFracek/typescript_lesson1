//tworzymy własny typ danych stworzony z 2ch typów
type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"
// union types adn literral types
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result
  //dzięki paramentrowi resultConversion, możemy sami określić jakim typ danych ma zostać zwrócony
  if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
  // if (resultConversion === "as-number") {
  //   return +result
  // }
  // else {
  //   return result.toString()
  // }
  
}

const combinedAges = combine(30, 20, "as-number")
console.log(combinedAges)

const combinedNames = combine('Max', "Anna", "as-text");
console.log(combinedNames)

const combinedStringAges = combine("30", "20", "as-number")
console.log(combinedStringAges)