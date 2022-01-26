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

enum Role { ADMIN, READONLY_USER, AUTHOR}

const person = {
  name: "Artur",
  age: 25,
  hobbies: ['Guitar', 'Gym'],
  role: Role.AUTHOR
}

console.log(person.role)