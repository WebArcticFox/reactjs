import React from 'react'
import s from './message.module.css'


const Message = (props) => {
    return (
        <div id={props.id} className={s.message+' '+s[props.author]}>{props.text}</div>
    )
}

export default Message;