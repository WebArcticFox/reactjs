import React from "react";
import {connect} from "react-redux";
import {followUser, getUsers,unFollowUser} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import withRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => { // Change page
        this.props.getUsers(pageNumber,this.props.pageSize);
    }


    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   unFollowUser={this.props.unFollowUser}
                   followUser={this.props.followUser}
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

export default compose(
    withRedirectComponent,
    connect(mapStateToProps,{followUser,unFollowUser,getUsers} )
)(UsersContainer);