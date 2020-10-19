const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-TEXT-POST';

let initialState = {
    posts: [
        {id: 1, text: 'Лучший пост', like: 2},
        {id: 2, text: 'Псевдо пост', like: 25},
        {id: 3, text: 'Худший пост', like: 142},
        {id: 4, text: 'Мой лучший пост', like: 580}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: state.newPostText,like: 0}],
                newPostText: ''
            }
        case CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postMessage
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeTextActionCreator = (text) => ({ type: CHANGE_POST_TEXT, postMessage: text });

export default profileReducer;