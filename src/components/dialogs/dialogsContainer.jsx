import React from 'react'
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../StoreContext";


const DialogsContainer = (props) => {

    return(
        <StoreContext.Consumer>
        { (store) => {

                let state = store.getState();

                let addMessage = () => {
                    store.dispatch( addMessageActionCreator() )
                }

                let changeTextMessage = (text) => {
                    store.dispatch( changeTextMessageActionCreator(text) )
                }

                let clearMessage = () => {
                    store.dispatch( changeTextMessageActionCreator('') )
                }

                return(<Dialogs addMessage={addMessage} changeTextMessage={changeTextMessage} clearMessage={clearMessage}
                         dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                         newMessageText={state.dialogsPage.newMessageText}/>)
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;