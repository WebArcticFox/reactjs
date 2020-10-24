import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";



class MypostsContainer extends React.Component {
    onAddPost = () => {
        this.props.addPost();
    }
    onPostChange = (e) => {
        let text = e.target.value
        this.props.changePostText(text);
    }
    onClearPost = () => {
        this.props.changePostText('');
    }

    render = () => {
        let postsJsx = this.props.post.map( post => <Mypost key={post.id} id={post.id} text={post.text} like={post.like} />)
        return (
            <div>
                <h4>My posts</h4>
                <div className={s.new_post}>
                    <textarea onChange={ this.onPostChange } value={this.props.newPostText} placeholder="New post"></textarea>
                    <div>
                        <button onClick={ this.onAddPost }>Add post</button>
                        <button onClick={ this.onClearPost }>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsJsx}
                </div>
            </div>
        );
    }


}

export default MypostsContainer;