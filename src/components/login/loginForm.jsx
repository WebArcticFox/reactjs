import React from "react";
import {Field} from "redux-form";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Логин"} name={"email"} component={"input"} /></div>
            <div><Field placeholder={"Пароль"} name={"password"} component={"input"} /></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} /> запомнить</div>
            <div><button>Авторизация</button></div>
        </form>
    )
}

export default LoginForm;