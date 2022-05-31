let cardValues = ['x','y','z'];


// [a,b,c] = [x,y,z]
// ['x','x','y','y','z','z']
// [
//     {id:1, value:'x', show:false, isMatched:true},
//     {id:2, value:'x', show:false, isMatched:true},
//     {id:3, value:'y', show:false, isMatched:true},
//     {id:4, value:'y', show:false, isMatched:true},
//     {id:5, value:'z', show:false, isMatched:false},
//     {id:6, value:'z', show:false, isMatched:false},
// ]

// fitler i don't change the things in the array i just keep/remove them

// with reduce
let x1 = cardValues.reduce((cards,cardString, index)=>{
    console.log('cards', cards)
    console.log('card', cardString)
    let cardObj = {id: index*2, value:cardString,show:false, isMatched:false}
    let cardObj1 = {id: index*2 +1, value:cardString,show:false, isMatched:false}
    return [...cards,cardObj,cardObj1 ]
    // cards.push(cardObj,cardObj1)
    // return cards
},[])

// with forEach
let x2 = []
let id = 0
cardValues.forEach((cardValue,index)=>{
    let cardObj = {id: id++, value:cardValue,show:false, isMatched:false}
    let cardObj1 = {id: id++, value:cardValue,show:false, isMatched:false}
    x2.push(cardObj,cardObj1) 
},[])

console.log(x2)

let x3 = cardValues.reduce((accum, currentItem)=>{
    accum.push(currentItem, currentItem)
    return accum
},[])

// 1 + 1 + 4 - 5 / 4 +4
let y1 = x1.map(foo => ({...foo, sortNum:  Math.random()}))
         .sort((a,b) => a.sortNum - b.sortNum )
         .map((bar)=>({id:bar.id, value:bar.value, show:false, isMatched:false}))
console.log(y1)