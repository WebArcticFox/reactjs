import React from "react";
import Myposts from "./myposts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        changePostText: (text) => dispatch(changeTextActionCreator(text)),
        clearPost: () => dispatch(changeTextActionCreator(''))
    }
}

const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);



export default MypostsContainer;