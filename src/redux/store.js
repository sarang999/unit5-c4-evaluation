
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { wereducer } from "./reducer";

export const store = createStore(wereducer, applyMiddleware(thunk));



