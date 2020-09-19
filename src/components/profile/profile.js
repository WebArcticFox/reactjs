import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import Myposts from "./myposts/myposts";

const Profile = () => {
    return (
        <article className={s.content}>
            <ProfileInfo />
            <Myposts />
        </article>
    );
}

export default Profile;