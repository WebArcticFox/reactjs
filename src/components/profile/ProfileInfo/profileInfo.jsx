import React from "react";
import s from './profileInfo.module.css'

class ProfileInfo extends React.Component {
    render = () => {
        return (
            <div className={s.profileinfo}>
                <div className={s.fullimg}>
                    <img src="http://alp.org.ua/wp-content/uploads/2012/07/artleo.com_21593.jpg" />
                </div>
                <div className={s.baseinfo}>
                    <img className={s.avatar} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*" />
                    <div>
                        <p className={s.name}>Alexander</p>
                        <p className={s.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;