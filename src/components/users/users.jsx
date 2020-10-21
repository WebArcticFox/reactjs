import React from 'react'
import s from './users.module.css';
import User from "./user/user";
import * as axios from "axios";

let Users = (props) => {

    if(props.users.length===0){

        axios.get("http://react.webarcticfox.ru/users.php").then(response => {
            props.setUsers(response.data)
        })
    }

    let usersJsx = props.users.map( u => <User name={u.name} id={u.id} key={u.id} location={u.location} follow={u.follow} desc={u.desc} img={u.img} followUser={props.followUser} unFollowUser={props.unFollowUser} />)

    return (
        <div>
            { usersJsx }
        </div>
    )
}

export default Users;