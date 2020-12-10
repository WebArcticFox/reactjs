import React from 'react'
import * as axios from "axios";
import Users from "./users";

class UsersAPIComponent extends React.Component {
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
        return <Users currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow} />
    }
}

export default UsersAPIComponent;