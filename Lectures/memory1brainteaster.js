let cardValues = ['x', 'y', 'z']

// let cardObjects = [
//   {id: 1, value: 'x', show: false, isMatched: false},
//   {id: 2, value: 'x', show: false, isMatched: false},
//   {id: 3, value: 'y', show: false, isMatched: false},
//   {id: 4, value: 'y', show: false, isMatched: false},
//   {id: 5, value: 'z', show: false, isMatched: false},
//   {id: 5, value: 'z', show: false, isMatched: false},
// ]

let duplicatedCardValues = cardValues.map((c)=>{
  console.log(c)
  cardValues.push(c)
  return cardValues
})

console.log(duplicatedCardValues)