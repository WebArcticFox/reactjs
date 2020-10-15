import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import store from './redux/redux-store';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});

rerenderEntireTree(store.getState())
