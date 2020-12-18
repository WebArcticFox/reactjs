import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })
    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedRedirectComponent

}

export default withRedirectComponent;