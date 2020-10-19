import React from "react"
import {connect} from "react-redux";
import Nav from "./nav";

const mapStateToProps = (state) => {
    return {
        friends: state.siteData.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;