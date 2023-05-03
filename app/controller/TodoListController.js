import TodoListService from "../service/TodoListService.js"

const todoListService = new TodoListService()

class TodoListController {
  static show(request, h) {
    return h.response({
      status: "success",
      data: todoListService.show()
    }).code(200)
  }

  static findById(request, h) {
    try {
      const { id } = request.params
      const todoListId = todoListService.findById(id)
      return h.response({
        status: "success",
        data: todoListId
      }).code(200)
    } catch (error) {
      return h.response({
        status: "fail",
        message: error.message
      }).code(404)
    }
  }

  static add(request, h) {
    try {
      const { todo } = request.payload
      todoListService.save(todo)
      return h.response({
        status: "success",
        message: "Berhasil ditambahkan"
      }).code(201)
    } catch (error) {
      return h.response({
        status: "fail",
        message: error.message
      }).code(400)
    }
  }

  static remove(request, h) {
    try {
      todoListService.remove(request.params.id)
      return h.response({
        status: "success",
        message: "Berhasil dihapus"
      }).code(201)
    } catch (error) {
      return h.response({
        status: "fail",
        message: error.message
      }).code(404)
    }
  }

  static update(request, h) {
    try {
      const { todo } = request.payload
      todoListService.update(todo, request.params.id)
      return h.response({
        status: "success",
        message: "Berhasil diupdate"
      }).code(201)
    } catch (error) {
      const code = (error.message === 'Todo tidak ditemukan' ? 404 : 400)
      return h.response({
        status: "fail",
        message: error.message
      }).code(code)
    }
  }
}


export default TodoListController;