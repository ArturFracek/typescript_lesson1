"use strict";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
////////////////////////////////////////////Basic types
let id = 5;
let company = "Google Inc.";
let isPublished = false;
let x = "Hello";
////////////////////////////////////////////////Arrs and tuples
//arrs
let ids = [1, 2, 3, 4, 5];
let anyArr = [1, "cos", false];
//Tuples
let persona = [1, "Artur", true];
//tuple array
let employee = [
    [1, "Artur"],
    [2, "Andrzej"],
    [8, "Dawid"]
];
/////////////////////////////////////////union types
let pid = "first";
//enums -> every element of "object" has assigned number by default its 0
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.up) -> 0
/////////////////////////////////////objects types
let object1 = {
    id: 1,
    name: "object one"
};
let object2 = {
    id: 3,
    name: "object two"
};
//////////////////////////Types assertion
let cid = 0;
let cliendId = cid;
/////////////////////////////////////functions
function addNumbers(x, y) {
    return x + y;
}
function log(x, y) {
    console.log(x, y);
}
const user1 = {
    name: "Andrzej",
    id: Math.random(),
    present: true
};
const equation1 = (x, y) => x + y;
const equation2 = (x, y) => x - y;
class Person {
    constructor(pid, name, age, isCool) {
        this.pid = pid,
            this.name = name;
        this.age = age;
        this.isCool = isCool;
    }
    printUserInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}
//extending the class and its called Subclass
class Employeeee extends Person {
    constructor(pid, name, age, position, isCool) {
        super(pid, name, age, isCool);
        this.position = position;
    }
}
const employer1 = new Employeeee(3, "Artur", 9, "Front-end Developer");
const employer2 = new Employeeee(6, "Janusz", 15, "Front-end Developer", false);
// console.log(employer1) // -> we dont pass isCool because its optional. but its there, as undefined
// console.log(employer2) // -> we pass isCool and everything is working, optional values must come last !
////////////////////////////////////////////Generics
function getArr(items) {
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    return new Array().concat(items);
}
let numArr = getArr([1, 2, 3, 4, 5]);
let strArray = getArr(["John", "Artur", "Szpinak"]);
//strArray.push(2) => now u cant push number to strArray and vice versa
