var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//gdyby nie było ifa i tego warunku, pojawiłby się error, ponieważ 
//userInput miałby typ unknown, wiec nie mozna go nadpisac typem string
//zatem jest sens uzywac unknown jezeli nie chcemy any i chcemy miec pewną sprawdzalnośc typu danych
if (typeof userInput === "string") {
    userName = userInput;
}
// typ to never, poniewaz przy wykonaniu, ta funkcje wstrzymuje dalsze wykonywanie się kodu, i tak będzie zawsze,
// a więc nic nie zwracamy, podobnie jak w void, lecz void tak naprawdę zawsze zwraca void, a never, dosłownie oznacza że nie jest zwrócone cokolwiek
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while(true) {}
}
generateError("An error occured!", 500);
