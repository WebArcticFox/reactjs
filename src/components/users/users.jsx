import React from 'react'
import s from "./users.module.css";
import userPhoto from "../../assets/img/img_notfound.jpeg";
import * as axios from "axios";

let Users = (props) => {
    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                props.setUsers(responce.data.items)
            })
    }

    return <div>
        {
            props.users.map( u => <div key={u.id} className={s.user} id={u.id}>
                <div className={s.userleft}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    {u.followed ? <button className={s.follow_unfollow} onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button className={s.follow_unfollow} onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
                <div className={s.userCenter}>
                    <h3>{u.name}</h3>
                    <p>{u.status}</p>
                </div>
                <div className={s.userRight}>
                    <h4>{"u.location.country"}</h4>
                    <p>{"u.location.city"}</p>
                </div>

            </div>)
        }
    </div>
}

export default Users;