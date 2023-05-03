import { nanoid } from "nanoid"
import TodoListRepository from "../repository/TodoListRepository.js"
import Todo from "../model/Todo.js"

class TodoListService {
  constructor() {
    this.TodoListRepository = new TodoListRepository()
  }
  show() {
    return this.TodoListRepository.findAll()
  }

  save(todo) {
    if (todo.trim() === "") throw new Error("Todo tidak boleh kosong")
    const todoNew = new Todo(nanoid(), todo, new Date().toISOString(), new Date().toISOString())
    this.TodoListRepository.add(todoNew)
    return true
  }

  remove(id) {
    const noTodo = this.TodoListRepository.findNo(id)
    if (noTodo === -1) throw new Error("Todo tidak ditemukan")
    this.TodoListRepository.delete(noTodo)
    return true
  }

  update(todo, id) {
    const noTodo = this.TodoListRepository.findNo(id)
    if (noTodo === -1) throw new Error("Todo tidak ditemukan")
    if (todo.trim() === "") throw new Error("Todo tidak boleh kosong")
    const todoOld = this.TodoListRepository.findById(id)
    const todoUpdate = new Todo(todoOld.id, todo, todoOld.createdAt, new Date().toISOString())
    this.TodoListRepository.update(todoUpdate, noTodo)
    return true
  }

  findById(id) {
    const todo = this.TodoListRepository.findById(id)
    if (!todo) throw new Error("Todo tidak ditemukan")
    return todo
  }
}

export default TodoListService