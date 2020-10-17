import React from 'react'
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//
//     return(
//         <StoreContext.Consumer>
//         { (store) => {
//
//                 let state = store.getState();
//
//                 let addMessage = () => {
//                     store.dispatch( addMessageActionCreator() )
//                 }
//
//                 let changeTextMessage = (text) => {
//                     store.dispatch( changeTextMessageActionCreator(text) )
//                 }
//
//                 let clearMessage = () => {
//                     store.dispatch( changeTextMessageActionCreator('') )
//                 }
//
//                 return(<Dialogs addMessage={addMessage} changeTextMessage={changeTextMessage} clearMessage={clearMessage}
//                          dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
//                          newMessageText={state.dialogsPage.newMessageText}/>)
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;