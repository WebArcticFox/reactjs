import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import store from './redux/redux-store';
import StoreContext, {Provider} from "./components/StoreContext";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    rerenderEntireTree();
});

rerenderEntireTree()
