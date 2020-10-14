import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";



const Myposts = (props) => {
    let postsJsx = props.profilePage.posts.map( post => <Mypost key={post.id} id={post.id} text={post.text} like={post.like} />)


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(changeTextActionCreator(text))
    }

    let clearPost = () => {
        props.dispatch(changeTextActionCreator(''))
    }

    return (
        <div>
            <h4>My posts</h4>
            <div className={s.new_post}>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText} placeholder="New post"></textarea>
                <div>
                    <button onClick={ addPost }>Add post</button>
                    <button onClick={ clearPost }>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsJsx}
            </div>
        </div>
    );
}

export default Myposts;