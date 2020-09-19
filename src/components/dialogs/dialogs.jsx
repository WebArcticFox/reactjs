import React from 'react'
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={'/message/'+props.path} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
    )
}

const MessageItem = (props) => {
    return (
        <div id={props.id} className={s.message+' '+s[props.author]}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimitry'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Marta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Mariya'},
    ]
    let messagesList = [
        {id: 1, text: 'Hi', author: 'other_message'},
        {id: 2, text: 'How are you?', author: 'you_message'},
        {id: 3, text: 'I\'m Fine! And you?', author: 'other_message'},
        {id: 4, text: 'Mee too', author: 'you_message'},
        {id: 5, text: 'Good!', author: 'other_message'},
    ]

    return(
        <div className={s.content}>
            <div className={s.dialogs}>
                <DialogItem name={dialogsData[0].name} path={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} path={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} path={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} path={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} path={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <MessageItem id={messagesList[0].id} text={messagesList[0].text} author={messagesList[0].author} />
                <MessageItem id={messagesList[1].id} text={messagesList[1].text} author={messagesList[1].author} />
                <MessageItem id={messagesList[2].id} text={messagesList[2].text} author={messagesList[2].author} />
                <MessageItem id={messagesList[3].id} text={messagesList[3].text} author={messagesList[3].author} />
                <MessageItem id={messagesList[4].id} text={messagesList[4].text} author={messagesList[4].author} />
            </div>
        </div>
    )
}

export default Dialogs;