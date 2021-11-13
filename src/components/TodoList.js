import { useContext } from "react";
import { ReduxContext } from "../contexts/ReduxContext";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  const { getState } = useContext(ReduxContext);
  const todoItems = getState().todos;

  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {todoItems.map((todoItem) => (
          <li key={todoItem.id}>
            <TodoItem item={todoItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
