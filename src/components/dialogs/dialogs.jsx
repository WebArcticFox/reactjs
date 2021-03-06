import React from 'react'
import s from './dialogs.module.css'
import Dialog from "./dialog/dialog"
import Message from "./message/message"
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/formControls/formsControls";
import {maxLengthCreator, required} from "../../helpers/validators/validators";

const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    let dialogsJsx = props.dialogs.map( d => <Dialog key={d.id} name={d.name} img={d.img} path={d.id} />)
    let messageJsx = props.messages.map( m => <Message key={m.id} id={m.id} text={m.text} img={m.img} author={m.author} />)

    return(
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogsJsx}
            </div>
            <div className={s.messages}>
                {messageJsx}
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.new_message}>
            <Field component={TextArea} name={"newMessageBody"} placeholder={"New message"} validate={[required,maxLength50]} />
            <div>
                <button>Add message</button>
                {/*<button onClick={ onClearMessage }>Remove</button>*/}
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'message'})(AddMessageForm)

export default Dialogs;