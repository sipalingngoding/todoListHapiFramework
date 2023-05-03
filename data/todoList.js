import { nanoid } from "nanoid";

const todoList = [
  {
    id: nanoid(),
    todo: "Sarapan",
    createdAt: new Date().toISOString(),
    updateAt: new Date().toISOString()
  }, {
    id: nanoid(),
    todo: "Belajar",
    createdAt: new Date().toISOString(),
    updateAt: new Date().toISOString()
  }
];


export default todoList