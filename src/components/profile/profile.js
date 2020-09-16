import React from "react";
import s from './profile.module.css'
import Myposts from "./myposts/myposts";

const Profile = () => {
    return (
        <article className={s.content}>
            <img src="https://webarcticfox.ru/php-html-code.jpg" />
            <div>
                <img className={s.avatar} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*" />
                <p>Текст пользователя</p>
            </div>
            <div>
                <Myposts />
            </div>
        </article>
    );
}

export default Profile;