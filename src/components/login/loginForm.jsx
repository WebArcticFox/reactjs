import React from "react";
import {Field} from "redux-form";
import {Input} from "../common/formControls/formsControls";
import {required} from "../../helpers/validators/validators";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Логин"} name={"email"} component={Input} validate={[required]} /></div>
            <div><Field placeholder={"Пароль"} name={"password"} component={Input} validate={[required]} /></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} /> запомнить</div>
            <div><button>Авторизация</button></div>
        </form>
    )
}

export default LoginForm;