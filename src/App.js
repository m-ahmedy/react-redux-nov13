import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { ReduxContext } from "./contexts/ReduxContext";

/*
- Listener
- componentDidMount event
- componentWillUnmount event
- render event
*/

export default class App extends React.Component {
  static contextType = ReduxContext;

  listener = () => this.forceUpdate();

  componentDidMount() {
    const { subscribe } = this.context;
    this.unsubscribe = subscribe(this.listener);
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === "function") {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <NewTodo />
        <TodoList />
      </Layout>
    );
  }
}
