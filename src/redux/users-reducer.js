const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollow: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }) ]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }) ]
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollow: action.isFollow
                    ? [...state.isFollow, action.userId]
                    : state.isFollow.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollow = (isFollow, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollow, userId })

export default usersReducer;