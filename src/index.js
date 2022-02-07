import React from "react";
import ReactDOM from "react-dom";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App/App";

import reportWebVitals from "./reportWebVitals";
import buttonReducer from "./reducers/buttonReducer";
import { store } from "./utils/store";

const reducers = combineReducers({
    buttonReducer,
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default reducers;
