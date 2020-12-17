import React from 'react'
import s from "./users.module.css";
import userPhoto from "../../assets/img/img_notfound.jpeg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div className={s.pagination}>
            {pages.map( p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : s.page} onClick={ () => { props.onPageChanged(p) } }>{p}</span>
            })}
        </div>
        {
            props.users.map( u => <div key={u.id} className={s.user} id={u.id}>
                <div className={s.userLeft}>
                    <NavLink to={'/profile/'+u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={false}/>
                    </NavLink>
                    {u.followed ? <button disabled={props.isFollow.some(id => id === u.id)} className={s.follow_unfollow} onClick={() => {
                        props.unFollowUser(u.id)
                    }}>UnFollow</button> : <button disabled={props.isFollow.some(id => id === u.id)} className={s.follow_unfollow} onClick={() => {
                        props.followUser(u.id)
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