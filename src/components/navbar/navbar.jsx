import React from "react"
import s from './navbar.module.css';
import Mypost from "../profile/myposts/post/mypost";

const Navbar = (props) => {

    let friends = props.friends.map( friend => <div className={s.item_friends} id={friend.id}><img src={friend.img} /><p>{friend.name}</p></div>);

    return(
        <div className={s.friends}>
            <h4>Best friends</h4>
            <div>{friends}</div>
        </div>
    )
}

export default Navbar;