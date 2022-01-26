"use strict";
// const person: { 
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string] // typ: tuple - to znaczy ze arr ma miec dokladnie 2 elementy i muszą byc podanych typów
// } = {
//   name: "Artur",
//   age: 25,
//   hobbies: ['Guitar', 'Gym'],
//   role: [2, 'guitarist']
// }
// const ADMIN = 0;
// const READ_ONLY =1;
// const NEW_USER = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY_USER"] = 1] = "READONLY_USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Artur",
    age: 25,
    hobbies: ['Guitar', 'Gym'],
    role: Role.AUTHOR
};
console.log(person.role);
