import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteReducer from "./site-reducer";


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
    _callSubscriber(){
        console.log('error')
    },
    setSubscribe(observer){
        this._subscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.siteData = siteReducer(this._state.siteData, action)

        this._callSubscriber(this._state)
    }
}


export default store;
window.store = store;