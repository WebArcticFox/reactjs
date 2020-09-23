import React from 'react'
import s from './dialogs.module.css'
import Dialog from "./dialog/dialog"
import Message from "./message/message"

const Dialogs = (props) => {



    let dialogsJsx = props.state.dialogs.map( d => <Dialog name={d.name} img={d.img} path={d.id} />)
    let messageJsx = props.state.messages.map( m => <Message id={m.id} text={m.text} img={m.img} author={m.author} />)

    return(
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogsJsx}
            </div>
            <div className={s.messages}>
                {messageJsx}
            </div>
        </div>
    )
}

export default Dialogs;