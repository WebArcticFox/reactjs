import React from 'react'
import s from "./users.module.css";
import userPhoto from "../../assets/img/img_notfound.jpeg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div className={s.pagination}>
            {pages.map( p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={ () => { props.onPageChanged(p) } }>{p}</span>
            })}
        </div>
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