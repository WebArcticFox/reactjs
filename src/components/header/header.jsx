import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import Minuser from "./minuser";

let Header = (props) => {
    return (
        <header>
            <img src='https://webarcticfox.ru/logo.png' />

            <div className={s.login}>
                { props.isAuth ? <Minuser login={props.login} img={props.mainUser.img} />
                    : <NavLink to={'/login'}>Authorization</NavLink>}
            </div>
        </header>
    );
}

export default Header;