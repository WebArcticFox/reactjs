import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";

const Myposts = () => {

    let posts = [
        {id: 1, text: 'Лучший пост', like: 2},
        {id: 2, text: 'Псевдо пост', like: 25},
        {id: 3, text: 'Худший пост', like: 142},
        {id: 4, text: 'Мой лучший пост', like: 580},
    ]

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
                <Mypost id={posts[0].id} text={posts[0].text} like={posts[0].like} />
                <Mypost id={posts[1].id} text={posts[1].text} like={posts[1].like} />
                <Mypost id={posts[2].id} text={posts[1].text} like={posts[2].like} />
                <Mypost id={posts[3].id} text={posts[1].text} like={posts[3].like} />
            </div>
        </div>
    );
}

export default Myposts;