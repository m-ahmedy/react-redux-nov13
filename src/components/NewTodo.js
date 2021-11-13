import { useContext } from "react";
import { ReduxContext } from "../contexts/ReduxContext";
import { createTodo } from "../redux/actionCreators";

export function NewTodo() {
  const { dispatch } = useContext(ReduxContext);

  function formHandler(e) {
    e.preventDefault();
    const title = e.target["item-title"].value;

    const item = {
      id: Date.now(),
      title,
      completed: false
    };

    dispatch(createTodo(item));
    e.target["item-title"].value = "";
  }

  return (
    <form onSubmit={formHandler} className="add-items d-flex">
      {" "}
      <input
        name="item-title"
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />{" "}
      <button
        type="submit"
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>{" "}
    </form>
  );
}
