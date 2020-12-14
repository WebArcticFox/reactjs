import React from "react";
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setMainUserData, setUserData, toggleIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/preloader/preloader";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+id)
                    .then(response => {
                        this.props.setMainUserData(id, response.data.photos.small)
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