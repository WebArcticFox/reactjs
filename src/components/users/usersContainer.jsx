import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollow,
    unfollow
} from "../../redux/users-reducer";
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
        this.props.toggleIsFollow(true, id)
        usersAPI.follow(id).then(response => {
                if(response.data.resultCode===0){
                    this.props.follow(id)
                }
                this.props.toggleIsFollow(false, id)
            })
    }

    onUnFollow = (id) => {
        this.props.toggleIsFollow(true, id)
        usersAPI.unFollow(id).then(response => {
                if(response.data.resultCode===0){
                    this.props.unfollow(id)
                }
                this.props.toggleIsFollow(false, id)
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
                   isFollow={this.props.isFollow}
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
        isFetching: state.usersPage.isFetching,
        isFollow: state.usersPage.isFollow
    }
}

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleIsFollow}
)(UsersContainer);