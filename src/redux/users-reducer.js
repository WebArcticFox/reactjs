const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_PAGE = 'SET_PAGE';
const SET_CURPAGE = 'SET_CURPAGE';

let initialState = {
    users: [],
    pagination: {
        items: [],
        page: 0,
        count: 0,
        next_page: 0,
        prev_page: 0,
        limit: 4
    },
    currentPage: 0
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
            return {...state, users: [...action.users]}
        case SET_PAGE:
            return {
                ...state,
                pagination: action.pagination
            }
        case SET_CURPAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUserAC = (users) => ({type: SET_USER, users: users})
export const setPaginationAC = (pagination) => ({type: SET_PAGE, pagination: pagination})
export const setCurrentPageAC = (page) => ({type: SET_CURPAGE, page: page})


export default usersReducer;