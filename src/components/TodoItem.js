import React, { Fragment, useContext } from "react";
import { ReduxContext } from "../contexts/ReduxContext";
import { deleteTodo, updateTodo } from "../redux/actionCreators";

export function TodoItem(props) {
  const {
    item: { id, completed, title }
  } = props;
  const { dispatch } = useContext(ReduxContext);

  return (
    <Fragment>
      <div className="form-check">
        {" "}
        <label className="form-check-label">
          {" "}
          <input
            className="checkbox"
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              dispatch(
                updateTodo(id, {
                  completed: !completed
                })
              );
            }}
          />
          {title}
          <i className="input-helper"></i>
        </label>{" "}
      </div>{" "}
      <i
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
        className="remove mdi mdi-close-circle-outline"
      ></i>
    </Fragment>
  );
}
