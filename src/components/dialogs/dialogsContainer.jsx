import React from 'react'
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withRedirectComponent from "../../hoc/withAuthRedirect";
import Dialogs from "./dialogs";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        changeTextMessage: (text) => dispatch(changeTextMessageActionCreator(text)),
        clearMessage: () => dispatch(changeTextMessageActionCreator(''))
    }
}

export default compose(
    withRedirectComponent,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);