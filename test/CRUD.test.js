const {getInitTodos, addTodo, updateTodo, removeTodo} = require('../Lectures/CRUD');

it('test Read', ()=>{
    expect(getInitTodos().length).toBe(3)
})

it('test Create', ()=>{
  //Go to a website and grab the todos
  let todos = getInitTodos()
  // Then we go to a form and create a new todo
  const newTodo = {id: 3, complete: false, name: 'dishes'}
  // We can't mutate the todos
  expect(addTodo(todos, newTodo).length).toBe(4)
  expect(todos.length).toBe(3)
})

it('test Update', ()=>{
  //Go to a website and grab the todos
  let todos = getInitTodos()
  // Then we go to a form and create a new todo
  
  // update todo should return a new list of todos with the item
  //complete toggled
  let newTodos = updateTodo(todos, 1)
  let newFirstTodo = newTodos[0]
  let oldFirstTodo = todos[0]
  expect(newFirstTodo.complete).toBe(true)
  expect(oldFirstTodo.complete).toBe(false)
})

it('test Filter', ()=>{
  //Go to a website and grab the todos
  let todos = getInitTodos()
  // Then we go to a form and create a new todo
  
  // update todo should return a new list of todos with the item
  //complete toggled
  let newTodos = updateTodo(todos, 1)
  let newFirstTodo = newTodos[0]
  let oldFirstTodo = todos[0]
  expect(newFirstTodo.complete).toBe(true)
  expect(oldFirstTodo.complete).toBe(false)
})