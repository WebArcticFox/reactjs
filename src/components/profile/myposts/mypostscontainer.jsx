import React from "react";
import Myposts from "./myposts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => dispatch(addPostActionCreator(newPostBody)),
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(Myposts);