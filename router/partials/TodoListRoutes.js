
import TodoListController from "../../app/controller/TodoListController.js";

const TodoListRoutes = [
  {
    method: ['GET'],
    path: "/todolist",
    handler: TodoListController.show
  }, {
    method: ['POST'],
    path: "/todolist",
    handler: TodoListController.add
  }, {
    method: ['DELETE'],
    path: "/todolist/{id}",
    handler: TodoListController.remove
  },
  {
    method: ['GET'],
    path: "/todolist/{id}",
    handler: TodoListController.findById
  },
  {
    method: ['PUT'],
    path: "/todolist/{id}",
    handler: TodoListController.update
  }
];

export default TodoListRoutes