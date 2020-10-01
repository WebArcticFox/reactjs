import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import {addMessage, addPost, changeTextMessage, changeTextPost} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} changeTextPost={changeTextPost} changeTextMessage={changeTextMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;