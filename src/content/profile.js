import React from "react";

const Profile = () => {
    return (
        <article className="content--page">
            <img src="https://webarcticfox.ru/php-html-code.jpg" />
            <div>
                <img className="img--avatar" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*" />
                <p>Текст пользователя</p>
            </div>
            <div>
                <div>
                    My post
                    <div>Новый пост</div>

                </div>
            </div>
        </article>
    );
}

export default Profile;