import React from 'react'
import s from './dialogs.module.css'
import Dialog from "./dialog/dialog"
import Message from "./message/message"


class Dialogs extends React.Component{

    onAddMessage = () => {
        this.props.addMessage()
    }

    onChangeTextMessage = (e) => {
        let message = e.target.value
        this.props.changeTextMessage(message)
    }

    onClearMessage = () => {
        this.props.changeTextMessage('')
    }

    render = () => {
        let dialogsJsx = this.props.dialogs.map( d => <Dialog key={d.id} name={d.name} img={d.img} path={d.id} />)
        let messageJsx = this.props.messages.map( m => <Message key={m.id} id={m.id} text={m.text} img={m.img} author={m.author} />)

        return(
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsJsx}
                </div>
                <div className={s.messages}>
                    {messageJsx}
                    <div className={s.new_message}>
                        <textarea onChange={this.onChangeTextMessage} value={this.props.newMessageText} placeholder="New message"></textarea>
                        <div>
                            <button onClick={ this.onAddMessage }>Add message</button>
                            <button onClick={ this.onClearMessage }>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs;