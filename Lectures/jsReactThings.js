console.log('Hello I am from VIM')

// js - 2016/ ES6 ECMAScript
// template strings
let aName = 'bob'
console.log('This is a string ' + "<h1> my name is " + aName + "</h1>")

// better way
console.log(`This is ${aName} `)
const sayBye = () => 'Goodbye'

let [a, b] = [10, 20]
// order matters
let person = {name: 'Tony', age: 23}
let {name, age} = person
// key names matter

// function getUserInfo({name, age} {
//   console.log(`${name} is ${age}`)
// }

//with arrays, variable name doesn't it is the order that matters
//let [x, b] = [10, 20];

console.log(x);
// expected output: 10

console.log(b);
// expected output: 20

// with objects: names do matter, match the keys
// let person = {name:'TOny', age:23}
// let { age, name: newName, y} = person
// console.log(newName)
// console.log(age)
// console.log(y)

// function getUserInfo(person){
//    console.log(`${person.name} is ${person.age}`)
// }

// // we can destructure an object an a function defintion
// function getUserInfo1({name, age}){
//    console.log(`${name} is ${age}`)
// }

// getUserInfo(person)
// getUserInfo({name:'Jill', age:34})
// getUserInfo({name:'Bob', age:22})