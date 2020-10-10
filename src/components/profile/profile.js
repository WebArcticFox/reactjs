import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import Myposts from "./myposts/myposts";

const Profile = (props) => {
    return (
        <article className={s.content}>
            <ProfileInfo />
            <Myposts profilePage={props.profilePage} dispatch={props.dispatch} />
        </article>
    );
}

export default Profile;