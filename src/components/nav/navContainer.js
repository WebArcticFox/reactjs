import React from "react"
import {connect} from "react-redux";
import Nav from "./nav";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        friends: state.siteData.friends
    }
}

export default compose(
    connect(mapStateToProps)
)(Nav);