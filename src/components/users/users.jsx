import React from 'react'
import * as axios from "axios";
import s from './users.module.css'
import User from "./user/user";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://react.webarcticfox.ru/users.php?p=${this.props.currentPage}&limit=${this.props.pagination.limit}`).then(response => {
            this.props.setUsers(response.data.users)
            this.props.setPagination(response.data.pages)
        })
    }

    onCurrentPage = (id) => {
        this.props.setCurrentPage(id)
        axios.get(`https://react.webarcticfox.ru/users.php?p=${id}&limit=${this.props.pagination.limit}`).then(response => {
            this.props.setUsers(response.data.users)
            this.props.setPagination(response.data.pages)
        })
    }

    render = () => {
        let pagesJsx = this.props.pagination.items.map ( p => <span onClick={ (e) => { this.onCurrentPage(p.id) }} className={this.props.currentPage=== p.id? s.selectedPage : s.goToPage } key={p.id}>{p.id+1}</span>)
        let usersJsx = this.props.users.map( u => <User name={u.name} id={u.id} key={u.id} location={u.location} follow={u.follow} desc={u.desc} img={u.img} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser} />)

        return (
            <div>
                <div className={s.pagination}>
                    { pagesJsx }
                </div>
                { usersJsx }
            </div>
        )
    }
}

export default Users;