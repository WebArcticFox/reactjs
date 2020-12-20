import React from "react";
import LoginForm from "./loginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {goLogin} from "../../redux/auth-reducer";

const Login = (props) => {
    return (<div>
        <h1>Авторизация</h1>
        <LoginReduxForm onSubmit={props.goLogin} />
    </div>)
}


let mapStateToProps = (state) => ({
    id: state.auth.id
})


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default connect(mapStateToProps, {goLogin})(Login)