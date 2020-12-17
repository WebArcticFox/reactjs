import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFollow, unFollow} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, text: 'Лучший пост', like: 2},
        {id: 2, text: 'Псевдо пост', like: 25},
        {id: 3, text: 'Худший пост', like: 142},
        {id: 4, text: 'Мой лучший пост', like: 580}
    ],
    newPostText: '',
    profile: null
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeTextActionCreator = (text) => ({ type: CHANGE_POST_TEXT, postMessage: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profileReducer;