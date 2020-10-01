import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import store from './redux/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} changeTextPost={store.changeTextPost.bind(store)} changeTextMessage={store.changeTextMessage.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.setSubscribe(rerenderEntireTree)
rerenderEntireTree(store.getState())
