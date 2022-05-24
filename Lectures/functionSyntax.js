// Function expression
// We always have to use return statement if we want to return something!
// Can call function before defined with function syntax
let sum = add(1, 1)
console.log(sum)

function add(num1, num2){
  return num1 + num2
}

// Arrow function
// let sum1 = add1(1, 1)
// console.log(sum1)
// If I use {} I need to use the return keyword
const add1 = (num1, num2)=>{
  return num1 + num2
}

// Shorthand
// Don't need () and then we have an implicit return
const add2 = (num1, num)=> num1 + num2
const sum2 = add2(1, 1)

// personOBJ = {name: 'Joe', age: 27}

// I am expecting u to be an object with name and age
const getUserInfo =({name, age})=>{
  console.log(name)
  console.log(age)
}