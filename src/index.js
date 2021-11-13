import ReactDOM from "react-dom";

import App from "./App";
import { store } from "./redux";
// import { ReduxProvider } from "./contexts/ReduxContext";
import { Provider } 'react-redux';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  rootElement
);
