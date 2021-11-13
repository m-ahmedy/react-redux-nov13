import { combineReducers, createStore } from "redux";
import { middleware } from "./middleware";
import { todos } from "./reducer";

const reducer = combineReducers({
  todos
});

export const store = createStore(reducer, middleware);
