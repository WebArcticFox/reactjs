import React from "react";
import s from './profileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../assets/img/img_notfound.jpeg";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }else{
        return (
            <div className={s.profileinfo}>
                <div className={s.fullimg}>
                    <img src={props.profile.photos.large} />

                </div>
                <div className={s.baseinfo}>
                    <img className={s.avatar} src={props.profile.photos.small !== null ? props.profile.photos.small : userPhoto}/>
                    <div>
                        <p className={s.name}>{props.profile.fullName}</p>
                        <p className={s.desc}>{props.profile.lookingForAJobDescription}</p>
                        <br />
                        <p className={s.desc}>Github: {props.profile.contacts.github}</p>
                        <p className={s.desc}>VK: {props.profile.contacts.vk}</p>
                        <p className={s.desc}>Site: {props.profile.contacts.website}</p>
                        <p className={s.desc}>FB: {props.profile.contacts.facebook}</p>
                        <p className={s.desc}>instagram: {props.profile.contacts.instagram}</p>
                    </div>

                </div>
                <ProfileStatus />
            </div>
        )
    }
}

export default ProfileInfo;