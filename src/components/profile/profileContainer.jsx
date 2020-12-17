import React from 'react'
import Profile from "./profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            if(!this.props.mainUser.id) {
                userId = 2;
            }else{
                userId = this.props.mainUser.id;
            }
        }
        profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    mainUser: state.auth.mainUser
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);