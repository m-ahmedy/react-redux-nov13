import { applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

export const middleware = applyMiddleware(loggerMiddleware);
