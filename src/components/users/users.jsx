import React from 'react'
import * as axios from "axios";
import User from "./user/user";

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get("http://react.webarcticfox.ru/users.php").then(response => {
            this.props.setUsers(response.data)
        })
    }
    render = () => {
        let usersJsx = this.props.users.map( u => <User name={u.name} id={u.id} key={u.id} location={u.location} follow={u.follow} desc={u.desc} img={u.img} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser} />)
        return (
            <div>
                { usersJsx }
            </div>
        )
    }
}

export default Users;