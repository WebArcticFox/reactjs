import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteReducer from "./site-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    siteData: siteReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;