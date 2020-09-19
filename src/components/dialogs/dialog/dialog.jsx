import React from 'react'
import s from './dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={'/message/' + props.path} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
    )
}


export default Dialog;