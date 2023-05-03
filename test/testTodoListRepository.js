import TodoListRepository from "../app/repository/TodoListRepository.js";

import Todo from "../app/model/Todo.js";

const todoListRepository = new TodoListRepository()

console.log(todoListRepository.findAll());// Show

const todoNew = new Todo('ff4t4grege', "Makan Siang",
  new Date().toISOString(), new Date().toISOString())

//todoListRepository.add(todoNew) //Add TODO

//todoListRepository.delete(1) //Delete

//todoListRepository.update(todoNew, 1) //Update

console.log("---------------------------");
console.log(todoListRepository.findAll());