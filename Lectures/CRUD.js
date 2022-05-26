// Create(POST), Read(GET), Update(PUT), Delete (web 101)

// CRUD in js

// READ
let todos = [{id: 1, complete: false, name: 'eat'},
{id: 2, complete: false, name: 'sleep'},
{id: 3, complete: false, name: 'code'}
];

//READ (will be done with API call)
const getInitTodos = ()=>{
  return todos
}

// Get todo from form
const addTodo = (listOfTodos, todo)=>{
  return [...listOfTodos, todo]
}

// Form or click event
const updateTodo = (listOfTodos, id)=>{
  // map
  return listOfTodos.map((t)=>t.id === id ? {...t, complete: !t.complete} : t)
//   return listOfTodos.map(t=>{
//     if(t.id === id){
//       return {...t, complete: !t.complete}
//     }
//     return t
//   })
}

// click event on TODO to trigger this
const removeTodo = (todosState, id)=>{
  return todosState.filter((t)=> t.id !== id)
}
module.exports = { getInitTodos, addTodo, updateTodo, removeTodo }