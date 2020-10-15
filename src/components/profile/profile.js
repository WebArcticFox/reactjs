import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MypostsContainer from "./myposts/mypostscontainer";

const Profile = (props) => {
    return (
        <article className={s.content}>
            <ProfileInfo />
            <MypostsContainer />
        </article>
    );
}

export default Profile;