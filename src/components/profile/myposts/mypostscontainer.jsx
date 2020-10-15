import React from "react";
import Myposts from "./myposts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../StoreContext";



const MypostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
        { (store) => {
                let state = store.getState();


                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let changePostText = (text) => {
                    store.dispatch(changeTextActionCreator(text))
                }

                let clearPost = () => {
                    store.dispatch(changeTextActionCreator(''))
                }

                return (<Myposts addPost={addPost} changePostText={changePostText} clearPost={clearPost}
                         post={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>) }
            }
        </StoreContext.Consumer>
    );
}

export default MypostsContainer;