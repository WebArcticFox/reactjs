import React from 'react'
import Profile from "./profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            if(!this.props.mainUser.id) {
                userId = 13315;
            }else{
                userId = this.props.mainUser.id;
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (

            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    mainUser: state.auth.mainUser,
    status: state.profilePage.status
})

export default compose(
    //withRedirectComponent,
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus})
)(ProfileContainer);