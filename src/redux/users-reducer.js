const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            follow: true
                        }
                    }else {
                        return u;
                    }
                } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            follow: false
                        }
                    }else {
                        return u;
                    }
                } )
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUserAC = (users) => ({type: SET_USER, users: users})

export default usersReducer;