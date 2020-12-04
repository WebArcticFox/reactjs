import React from 'react'
import s from "./users.module.css";
import userPhoto from "../../assets/img/img_notfound.jpeg";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div className={s.pagination}>
                {pages.map( p => {
                    return <span className={this.props.currentPage === p && s.selectedPage} onClick={ () => { this.onPageChanged(p) } }>{p}</span>
                })}
            </div>
            {
                this.props.users.map( u => <div key={u.id} className={s.user} id={u.id}>
                    <div className={s.userleft}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        {u.followed ? <button className={s.follow_unfollow} onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> : <button className={s.follow_unfollow} onClick={() => {
                            this.props.follow(u.id)
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
}

export default Users;