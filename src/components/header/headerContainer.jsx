import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reducer";
import Preloader from "../common/preloader/preloader";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
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

export default connect(mapStateToProps, {getAuth})(HeaderContainer);