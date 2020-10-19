import React from 'react'
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUserAC, unFollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followAC(userId)),
        unFollowUser: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUserAC(users))
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;