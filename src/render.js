import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;