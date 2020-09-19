import React from 'react'
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
        <div className={s.content}>
            <div className={s.dialogs}>
                <NavLink to="/message/1" className={s.item + ' ' +s.active}>Dimitry</NavLink>
                <NavLink to="/message/2" className={s.item}>Alexander</NavLink>
                <NavLink to="/message/3" className={s.item}>Ajar</NavLink>
                <NavLink to="/message/4" className={s.item}>Mariya</NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are yoy</div>
                <div className={s.message}>I'm Fine!</div>
            </div>
        </div>
    )
}

export default Dialogs;