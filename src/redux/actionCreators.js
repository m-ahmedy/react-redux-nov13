import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionIdentifiers";

export function createTodo(todoItem) {
  return {
    type: CREATE_TODO,
    payload: { todoItem }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id }
  };
}

export function updateTodo(id, updatedTodoItem) {
  return {
    type: UPDATE_TODO,
    payload: { id, updatedTodoItem }
  };
}
