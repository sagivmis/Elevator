import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "../reducers/buttonReducer";

const middleware = [thunk];
const initialState = {};
export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
