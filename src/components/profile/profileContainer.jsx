import React from 'react'
import Profile from "./profile";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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
        this.props.getProfile(userId)
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

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);