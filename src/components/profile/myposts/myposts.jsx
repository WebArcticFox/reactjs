import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";

const Myposts = (props) => {



    let postsJsx = props.data.map( post => <Mypost id={post.id} text={post.text} like={post.like} />)

    return (
        <div>
            <h4>My posts</h4>
            <div className={s.new_post}>
                <textarea placeholder="New post"></textarea>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsJsx}
            </div>
        </div>
    );
}

export default Myposts;