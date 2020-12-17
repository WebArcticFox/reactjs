import React from "react";
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setMainUserData, setUserData, toggleIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/preloader/preloader";
import {authAPI, profileAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.checkAuth().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login)

                profileAPI.getProfile(id).then(data => {
                        this.props.setMainUserData(id, data.photos.small)
                        this.props.toggleIsFetching(false);
                    })
            }
        })
    }

    render() {
        return ( <>
            { this.props.isFetching ? <Preloader /> : <Header {...this.props} /> }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    mainUser: state.auth.mainUser
})

export default connect(mapStateToProps, {setUserData, toggleIsFetching, setMainUserData})(HeaderContainer);