import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import store from './redux/redux-store';
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
