import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionIdentifiers";

const initialState = [
  {
    title: "Hello from item 123",
    completed: false,
    id: 123
  },
  {
    title: "Hello from item 456",
    completed: true,
    id: 456
  }
];

export function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO: {
      const { todoItem } = action.payload;
      return [...state, todoItem];
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter((ti) => ti.id !== id);
    }

    case UPDATE_TODO: {
      const { id, updatedTodoItem } = action.payload;
      const stateTodoItem = state.find((ti) => ti.id === id);

      if (stateTodoItem) {
        const newTodoItem = {
          ...stateTodoItem,
          ...updatedTodoItem
        };

        return state.map((ti) => {
          if (ti.id === id) {
            return newTodoItem;
          } else {
            return ti;
          }
        });
      }

      return state;
    }

    default:
      return state;
  }
}
