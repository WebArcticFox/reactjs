import React from "react";
import Myposts from "./myposts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";



const MypostsContainer = (props) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changePostText = (text) => {
        props.store.dispatch(changeTextActionCreator(text))
    }

    let clearPost = () => {
        props.store.dispatch(changeTextActionCreator(''))
    }

    return (
        <Myposts addPost={addPost} changePostText={changePostText} clearPost={clearPost} post={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    );
}

export default MypostsContainer;