import React from "react";

/*
- Create context
- Create provider component
*/

export const ReduxContext = React.createContext();

export function ReduxProvider(props) {
  return (
    <ReduxContext.Provider value={props.store}>
      {props.children}
    </ReduxContext.Provider>
  );
}
