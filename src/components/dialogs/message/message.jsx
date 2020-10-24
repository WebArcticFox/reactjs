import React from 'react'
import s from './message.module.css'


class Message extends React.Component {
    render = () => {
        return (
            <div id={this.props.id} className={s.message+' '+s[this.props.author]}><img src={this.props.img} /> {this.props.text}</div>
        )
    }
}

export default Message;