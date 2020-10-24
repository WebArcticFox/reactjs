import React from "react"
import s from './nav.module.css';
import {NavLink} from "react-router-dom";
import Navbar from "../navbar/navbar";

class Nav extends React.Component{
    render = () => {
        return (
            <nav className={s.nav}>
                <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink>
                <NavLink className={s.item} activeClassName={s.active} to="/message">Messages</NavLink>
                <NavLink className={s.item} activeClassName={s.active} to="/users">Users</NavLink>
                <NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink>
                <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink>
                <br/>
                <NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink>
                <br/>
                <Navbar friends={this.props.friends}/>
            </nav>
        )
    }
}

export default Nav;