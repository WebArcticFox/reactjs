const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimitry', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 2, name: 'Alexander', img: 'https://sci-fi-news.ru/wp-content/uploads/2018/08/x-men-mcu-850x550.jpg'},
        {id: 3, name: 'Marta', img: 'https://sci-fi-news.ru/wp-content/uploads/2018/08/x-men-mcu-850x550.jpg'},
        {id: 4, name: 'Viktor', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 5, name: 'Mariya', img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg'},
    ],
    messages: [
        {id: 1, text: 'Hi', author: 'other_message', img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg'},
        {id: 2, text: 'How are you?', author: 'you_message', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 3, text: 'I\'m Fine! And you?', author: 'other_message', img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg'},
        {id: 4, text: 'Mee too', author: 'you_message', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 5, text: 'Good!', author: 'other_message', img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, text: action.newMessageBody, author: 'you_message', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;