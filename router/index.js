import TodoListRoutes from "./partials/TodoListRoutes.js";


const routes = [{
  method: ['GET'],
  path: "/",
  handler: (request, h) => {
    return h.response({
      status: "success",
      message: "Aplikasi TodoList"
    }).code(200)
  }
}, ...TodoListRoutes];

export default routes;
