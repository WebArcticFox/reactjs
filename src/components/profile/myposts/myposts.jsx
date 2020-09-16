import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";

const Myposts = () => {
    return (
        <div>
            My post
            <div className='new_post'>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Mypost text='Лучший пост' like='2' />
                <Mypost text='Псевдо пост' like='5' />
                <Mypost text='Худший пост' like='2001' />
                <Mypost text='Мой лучший пост' like='59000000' />
            </div>
        </div>
    );
}

export default Myposts;