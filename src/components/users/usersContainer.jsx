import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setPagination,
    setUser,
    unFollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://react.webarcticfox.ru/users.php?p=${this.props.currentPage}&limit=${this.props.pagination.limit}`).then(response => {
            this.props.setUser(response.data.users)
            this.props.setPagination(response.data.pages)
            this.props.toggleIsFetching(false)
        })
    }

    onCurrentPage = (id) => {
        this.props.setCurrentPage(id)
        this.props.toggleIsFetching(true)
        axios.get(`https://react.webarcticfox.ru/users.php?p=${id}&limit=${this.props.pagination.limit}`).then(response => {
            this.props.setUser(response.data.users)
            this.props.setPagination(response.data.pages)
            this.props.toggleIsFetching(false)
        })
    }

    render = () => {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : <Users pages={this.props.pagination.items} users={this.props.users} onCurrentPage={this.onCurrentPage} currentPage={this.props.currentPage} followedUser={this.props.follow} unfollowedUser={this.props.unFollow} />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps,{
    follow,unFollow,setUser,setPagination,setCurrentPage,toggleIsFetching})(UsersContainer);