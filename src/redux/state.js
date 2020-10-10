const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-TEXT-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, text: 'Лучший пост', like: 2},
                {id: 2, text: 'Псевдо пост', like: 25},
                {id: 3, text: 'Худший пост', like: 142},
                {id: 4, text: 'Мой лучший пост', like: 580}
            ],
            newPostText: '',
        },
        dialogsPage:{
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
            newMessageText: '',
        },
        siteData: {
            friends: [
                {id: 1, img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230', name: 'Dima'},
                {id: 2, img: 'https://sci-fi-news.ru/wp-content/uploads/2018/08/x-men-mcu-850x550.jpg', name: 'Logan'},
                {id: 3, img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg', name: 'Putin'},
            ]
        }
    },
    _subscriber(){
        console.log('error')
    },
    setSubscribe(observer){
        this._subscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
        }else if(action.type === CHANGE_POST_TEXT){
            this._state.profilePage.newPostText = action.postMessage
        }else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: 6,
                text: this._state.dialogsPage.newMessageText,
                author: 'you_message',
                img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
        }else if(action.type === CHANGE_TEXT_MESSAGE){
            this._state.dialogsPage.newMessageText = action.textMessage
        }
        this._subscriber(this._state)
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeTextActionCreator = (text) => ({ type: CHANGE_POST_TEXT, postMessage: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeTextMessageActionCreator = (text) => ({ type: CHANGE_TEXT_MESSAGE, textMessage: text })


export default store;
window.store = store;