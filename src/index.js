import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import App from "./App";
import "antd/dist/antd.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { getToken } from "./utils/localStorageHandler";
import * as type from "./const/ActionTypes";
import axios from "axios";

var token = getToken();
if (token) {
    // window.location = "/login";
    const data = jwt.decode(token);
    console.log("data", data);
    const now = new Date().getTime() / 1000;
    if (data.exp > now) {
        store.dispatch({
            type: type.LOGGIN_SUCCESS,
            payload: { token, username: data.username },
        });
        // Xet global authorization khi goi api
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
