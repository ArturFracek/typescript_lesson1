// union types adn literral types
function combine(input1, input2, resultConversion) {
    var result;
    //dzięki paramentrowi resultConversion, możemy sami określić jakim typ danych ma zostać zwrócony
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //   return +result
    // }
    // else {
    //   return result.toString()
    // }
}
var combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);
var combinedNames = combine('Max', "Anna", "as-text");
console.log(combinedNames);
var combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);
