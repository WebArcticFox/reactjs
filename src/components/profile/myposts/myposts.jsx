import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";

const Myposts = (props) => {
    let postsJsx = props.profilePage.posts.map( post => <Mypost id={post.id} text={post.text} like={post.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.changeTextPost(text)
    }

    let clearPost = () => {
        props.changeTextPost('')
    }

    return (
        <div>
            <h4>My posts</h4>
            <div className={s.new_post}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} placeholder="New post"></textarea>
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