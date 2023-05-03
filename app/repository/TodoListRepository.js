import todoList from "../../data/todoList.js";

class TodoListRepository {
  findAll() {
    return todoList;
  }

  add(Todo) {
    todoList.push({ id: Todo.id, todo: Todo.todo, createdAt: Todo.createdAt, updateAt: Todo.updatedAt })
  }

  delete(no) {
    todoList.splice(no, 1)
  }

  update(Todo, no) {
    todoList.splice(no, 1, { id: Todo.id, todo: Todo.todo, createdAt: Todo.createdAt, updatedAt: Todo.updatedAt });
  }

  findById(id) {
    return todoList.find((todo) => (todo.id === id)) ?? null
  }

  findByIndex(no) {
    return todoList[no] ?? null
  }

  findNo(id) {
    return todoList.findIndex((todo) => (todo.id === id))
  }
}

export default TodoListRepository;