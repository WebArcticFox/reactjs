import React from 'react'
import s from './dialogs.module.css'
import Dialog from "./dialog/dialog"
import Message from "./message/message"
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let onAddMessage = () => {
        props.addMessage()
    }

    let onChangeTextMessage = (e) => {
        let message = e.target.value
        props.changeTextMessage(message)
    }

    let onClearMessage = () => {
        props.changeTextMessage('')
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
                <div className={s.new_message}>
                    <textarea onChange={onChangeTextMessage} value={props.newMessageText} placeholder="New message"></textarea>
                    <div>
                        <button onClick={ onAddMessage }>Add message</button>
                        <button onClick={ onClearMessage }>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;