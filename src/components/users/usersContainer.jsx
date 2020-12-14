import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }

    onFollow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+id, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "54bcaff3-f3f3-4d77-8a3c-de95f570942f"
            }
        })
            .then(response => {
                if(response.data.resultCode===0){
                    this.props.follow(id)
                }
            })
    }

    onUnFollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+id, {
            withCredentials: true,
            headers: {
                "API-KEY": "54bcaff3-f3f3-4d77-8a3c-de95f570942f"
            }
        })
            .then(response => {
                if(response.data.resultCode===0){
                    this.props.follow(id)
                }
            })
    }


    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   onUnFollow={this.onUnFollow}
                   onFollow={this.onFollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching}
)(UsersContainer);