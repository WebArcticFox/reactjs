import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header>
            <img src='https://webarcticfox.ru/logo.png' />

            <div className={s.login}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Authorization</NavLink>}
            </div>
        </header>
    );
}

export default Header;