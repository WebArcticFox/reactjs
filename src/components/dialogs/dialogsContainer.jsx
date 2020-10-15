import React from 'react'
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch( addMessageActionCreator() )
    }

    let changeTextMessage = (text) => {
        props.store.dispatch( changeTextMessageActionCreator(text) )
    }

    let clearMessage = () => {
        props.store.dispatch( changeTextMessageActionCreator('') )
    }

    return(
        <Dialogs addMessage={addMessage} changeTextMessage={changeTextMessage} clearMessage={clearMessage} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />
    )
}

export default DialogsContainer;