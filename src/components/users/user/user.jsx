import React from 'react'
import s from './user.module.css'
import userPhoto from '../../../img_notfound.jpeg'

class User extends React.Component {
    render = () => {
        return (
            <div className={s.user} id={this.props.id}>
                <div className={s.userleft}>
                    <img src={this.props.img !== null ? this.props.img : userPhoto}/>
                    {this.props.follow ? <button className={s.follow_unfollow} onClick={() => {
                        this.props.unFollowUser(this.props.id)
                    }}>Follow</button> : <button className={s.follow_unfollow} onClick={() => {
                        this.props.followUser(this.props.id)
                    }}>Unfollow</button>}
                </div>
                <div className={s.userCenter}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </div>
                <div className={s.userRight}>
                    <h4>{this.props.location.country}</h4>
                    <p>{this.props.location.city}</p>
                </div>

            </div>
        )
    }
}

export default User