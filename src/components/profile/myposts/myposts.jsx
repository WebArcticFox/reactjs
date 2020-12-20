import React from "react";
import s from './myposts.module.css'
import Mypost from "./post/mypost";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";



const MypostsContainer = (props) => {
    const onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }

    let postsJsx = props.post.map( post => <Mypost key={post.id} id={post.id} text={post.text} like={post.like} />)
    return (
        <div>
            <h4>My posts</h4>
            <AddPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsJsx}
            </div>
        </div>
    );

}

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.new_post}>
            <Field name={"newPostBody"} component={"textarea"} placeholder={"New post"} />
            <div>
                <button>Add post</button>
                {/*<button onClick={ this.onClearPost }>Remove</button>*/}
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'post'})(AddPostForm)

export default MypostsContainer;