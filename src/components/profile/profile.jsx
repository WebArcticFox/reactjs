import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MypostsContainer from "./myposts/mypostscontainer";

const Profile = (props) => {
    return (
        <article className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MypostsContainer />
        </article>
    );
}

export default Profile;