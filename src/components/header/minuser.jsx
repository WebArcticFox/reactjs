import React from "react";
import s from './header.module.css';
import userPhoto from "../../assets/img/img_notfound.jpeg";

let Minuser = (props) => {
    return (
        <div className={s.user__info}>
            <img src={props.img !== null ? props.img : userPhoto}/>
            <p>{ props.login }</p>
        </div>
    );
}

export default Minuser;