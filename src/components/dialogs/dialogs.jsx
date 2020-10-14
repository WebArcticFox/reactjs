import React from 'react'
import s from './dialogs.module.css'
import Dialog from "./dialog/dialog"
import Message from "./message/message"
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let addMessage = () => {
        props.dispatch( addMessageActionCreator() )
    }

    let changeTextMessage = (e) => {
        let message = e.target.value
        props.dispatch( changeTextMessageActionCreator(message) )
    }

    let clearMessage = () => {
        props.dispatch( changeTextMessageActionCreator('') )
    }

    let dialogsJsx = props.dialogsPage.dialogs.map( d => <Dialog key={d.id} name={d.name} img={d.img} path={d.id} />)
    let messageJsx = props.dialogsPage.messages.map( m => <Message key={m.id} id={m.id} text={m.text} img={m.img} author={m.author} />)

    return(
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogsJsx}
            </div>
            <div className={s.messages}>
                {messageJsx}
                <div className={s.new_message}>
                    <textarea onChange={changeTextMessage} value={props.dialogsPage.newMessageText} placeholder="New message"></textarea>
                    <div>
                        <button onClick={ addMessage }>Add message</button>
                        <button onClick={ clearMessage }>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;