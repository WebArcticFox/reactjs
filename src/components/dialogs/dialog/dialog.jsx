import React from 'react'
import s from './dialog.module.css'
import {NavLink} from "react-router-dom";

class Dialog extends React.Component {
    render = () => {
        return (
            <NavLink to={'/message/' + this.props.path} className={s.item} activeClassName={s.active}><img src={this.props.img} />{this.props.name}</NavLink>
        )
    }
}


export default Dialog;