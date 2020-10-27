const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_PAGE = 'SET_PAGE';
const SET_CURPAGE = 'SET_CURPAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHINT';

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
    currentPage: 0,
    isFetching: false
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
        case TOGGLE_FETCHING:
            return { ...state, isFetching: action.fetching}
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUser = (users) => ({type: SET_USER, users: users})
export const setPagination = (pagination) => ({type: SET_PAGE, pagination: pagination})
export const setCurrentPage = (page) => ({type: SET_CURPAGE, page: page})
export const toggleIsFetching = (fetching) => ({type: TOGGLE_FETCHING, fetching: fetching})


export default usersReducer;