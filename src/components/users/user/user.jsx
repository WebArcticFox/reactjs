import React from 'react'
import s from './user.module.css'

const User = (props) => {
    return (
        <div className={s.user} id={props.id}>
            <div className={s.userleft}>
                <img src={props.img} />
                {props.follow ? <button className={s.follow_unfollow} onClick={ ()=> { props.unFollowUser(props.id) } }>Follow</button> : <button className={s.follow_unfollow} onClick={ ()=> { props.followUser(props.id) } }>Unfollow</button>}
            </div>
            <div className={s.userCenter}>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
            <div className={s.userRight}>
                <h4>{props.location.country}</h4>
                <p>{props.location.city}</p>
            </div>

        </div>
    )
}

export default User