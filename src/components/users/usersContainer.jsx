import React from 'react'
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setCurrentPageAC, setPaginationAC, setUserAC, unFollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followAC(userId)),
        unFollowUser: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUserAC(users)),
        setPagination: (pagination) => dispatch(setPaginationAC(pagination)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page))
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;