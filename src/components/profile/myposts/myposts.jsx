import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";



const MypostsContainer = (props) => {
    let postsJsx = props.post.map( post => <Mypost key={post.id} id={post.id} text={post.text} like={post.like} />)


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.changePostText(text);
    }

    let onClearPost = () => {
        props.changePostText('');
    }

    return (
        <div>
            <h4>My posts</h4>
            <div className={s.new_post}>
                <textarea onChange={ onPostChange } value={props.newPostText} placeholder="New post"></textarea>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                    <button onClick={ onClearPost }>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsJsx}
            </div>
        </div>
    );
}

export default MypostsContainer;