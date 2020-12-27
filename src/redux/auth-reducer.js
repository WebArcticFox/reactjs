import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_MAIN_USER_DATA = 'SET_MAIN_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    mainUser: {
        id: null,
        img: null,
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_MAIN_USER_DATA:
            return {
                ...state,
                mainUser: {...action.data}
            }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}


export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} })
export const setMainUserData = (id, img) => ({ type: SET_MAIN_USER_DATA, data: {id, img} })

export const getAuth = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.checkAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login))

            profileAPI.getProfile(id).then(response => {
                dispatch(setMainUserData(id, response.data.photos.small))
                dispatch(toggleIsFetching(false))
            })
        }
    })
}

export const goLogin = (data) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.login(data).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuth())
        }
    })
}

export const logout = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuth())
        }
    })
}

export default authReducer;