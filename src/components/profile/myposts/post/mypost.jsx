import React from "react";
import s from './mypost.module.css'

class Mypost extends React.Component {
    render = () => {
        return (
            <div className={s.item}>
                <img src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*' />
                <p>{this.props.text}</p>
                <div>
                    <span>{this.props.like}</span>
                    <span> Like</span>
                </div>
            </div>
        );
    }
}

export default Mypost;