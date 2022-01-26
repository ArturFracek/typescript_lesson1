function adding(n1: number, n2: number) {
  return n1 + n2
}
// typ Void - znaczy ze nic nie zwracamy i wtedy tez nalezy uzywac void!
function printingResult(num: number) {
  console.log("Result: " + num)
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) { //precyzujemy, że callback ma przyjmować jeden parametr, który ma być number, i dalej zwraca void, czyli nic nie zwraca
  const result = n1 + n2;
  callback(result)
}

printingResult(adding(5, 12))


// combineValues powinna być typu "funkcja" i przyjmować dwa parametry o typie number, i zwracać tez typ number
let combineValues: (a: number, b: number) => number;

combineValues = adding;
// combineValues = printingResult // nie zadziała, ponieważ funkcja printingResult przyjmuje jeden parametr (ading())
//  więc nie spełnia warunu typów parametrów

console.log(combineValues(8, 8))

addAndHandle(10, 20, (givenNumber) => {
  console.log(givenNumber)
})