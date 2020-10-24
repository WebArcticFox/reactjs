import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MypostsContainer from "./myposts/mypostscontainer";

class Profile extends React.Component {
    render = () => {
        return (
            <article className={s.content}>
                <ProfileInfo />
                <MypostsContainer />
            </article>
        );
    }
}

export default Profile;