const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';

let initialState = {
    users: [
        {id: 1, name: 'Dimitry M.', location: { country: 'Russia', city: 'Moscow'}, follow: true, desc: 'Yooooo', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 2, name: 'Alexander K.', location: { country: 'Russia', city: 'St. Peterburg'}, follow: false, desc: 'MEEEEE', img: 'https://sci-fi-news.ru/wp-content/uploads/2018/08/x-men-mcu-850x550.jpg'},
        {id: 3, name: 'Marta S.', location: { country: 'Belarussia', city: 'Minsk'}, follow: false, desc: 'LOOSER', img: 'https://sci-fi-news.ru/wp-content/uploads/2018/08/x-men-mcu-850x550.jpg'},
        {id: 4, name: 'Viktor P.', location: { country: 'Belarussia', city: 'Polotslk'}, follow: false, desc: 'I want play game', img: 'https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=410&h=230'},
        {id: 5, name: 'Mariya U.', location: { country: 'Russia', city: 'Ufa'}, follow: true, desc: 'I\'m stay home', img: 'https://www.soyuz.ru/public/uploads/files/2/7244703/20190305183114b7f5052bb2.jpg'},
    ]
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