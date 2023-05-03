
import TodoListService from "../app/service/TodoListService.js";

const todoListService = new TodoListService()

const todoList = todoListService.show()
console.log(todoList); //Show

//console.log(todoListService.save("Makan Malam")); //Add

//console.log(todoListService.remove(todoList[0].id));// remove

//console.log(todoListService.update('Belajar Javascript', todoList[1].id)); //Update

console.log("---------------------------");
console.log(todoList);