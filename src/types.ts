/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

////////////////////////////////////////////Basic types
let id: number = 5
let company: string = "Google Inc."
let isPublished: boolean = false
let x: any = "Hello"

////////////////////////////////////////////////Arrs and tuples
//arrs
let ids: number[] = [1,2,3,4,5]
let anyArr: any[] = [1,"cos", false]

//Tuples
let persona: [number, string, boolean]  = [1,"Artur",true]
//tuple array
let employee: [number, string][] = [
  [1,"Artur"],
  [2,"Andrzej"],
  [8,"Dawid"]
]

/////////////////////////////////////////union types
let pid: number | string = "first"


//enums -> every element of "object" has assigned number by default its 0

enum Direction1 {
  up,
  down,
  left,
  right,
}
// console.log(Direction1.up) -> 0

/////////////////////////////////////objects types
let object1: {
  id: number
  name: string,
} = {
  id: 1,
  name: "object one"
}

//or

type Object2 = {
  id: number,
  name: string
}

let object2: Object2 = {
  id: 3,
  name: "object two"
}

//////////////////////////Types assertion
let cid: any = 0
let cliendId = cid as number

/////////////////////////////////////functions
function addNumbers(x: number, y: number): number {
  return x + y
}

function log(x: number, y: string): void {
  console.log(x, y)
}
// log(3, "three")

//////////////////////////////////////Interfaces -> cant be used with unions, we use them usually with objects
interface User {
  name: string,
  readonly id: number, // the readonly means that u cant change the id
  present: boolean,
  amazing?: boolean, // the "?" means that it is optional
}

const user1 = {
  name: "Andrzej",
  id: Math.random(),
  present: true
}
//Interfaces with functions 
interface MathEquation {(x: number, y: number): number}

const equation1: MathEquation = (x: number, y: number): number => x + y
const equation2: MathEquation = (x: number, y: number): number => x - y

//interface with JS class

interface PersonInterface {
  readonly pid: number,
  readonly name: string,
  age: string | number,
  isCool?: boolean
  printUserInfo(): string
}

class Person implements PersonInterface {
  pid: number
  name: string
  age: string | number
  isCool: boolean

  constructor(pid: number, name: string, age: string | number, isCool: boolean) {
    this.pid = pid,
    this.name = name
    this.age = age
    this.isCool = isCool
  }

  printUserInfo() {
    return `${this.name} is ${this.age} years old`
  }

}

//extending the class
class Employeeee extends Person {
  position: string
  constructor(pid: number, name: string, age: string | number, isCool: boolean, position: string) {
    super(pid, name, age, isCool)
    this.position = position
  }
}

const employer1 = new Employeeee(3, "Artur", 9, true, "Front-end Developer")

console.log(employer1)