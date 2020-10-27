import React from 'react'
import s from './users.module.css'
import User from "./user/user";

let Users = (props) => {
    let pagesJsx = props.pages.map(p => <span key={p.id} onClick={(e) => {
        props.onCurrentPage(p.id)
    }} className={props.currentPage === p.id ? s.selectedPage : s.goToPage} key={p.id}>{p.id + 1}</span>)
    let usersJsx = props.users.map(u => <User name={u.name} id={u.id} key={u.id} location={u.location}
                                                   follow={u.follow} desc={u.desc} img={u.img}
                                                   followUser={props.followedUser}
                                                   unFollowUser={props.unfollowedUser}/>)
    return (
        <div>
            <div className={s.pagination}>
                {pagesJsx}
            </div>
            {usersJsx}
        </div>
    )
}

export default Users;