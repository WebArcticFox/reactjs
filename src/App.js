import React from 'react';
import './App.css';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import NavContainer from "./components/nav/navContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <HeaderContainer/>
                <NavContainer />
                <div className="app_wrapper_content">
                    <Route exact path='/' render={ () => (<ProfileContainer />) } />
                    <Route path='/profile/:userId?' render={ () => (<ProfileContainer />) } />
                    <Route path='/message' render={ () => (<DialogsContainer />) } />
                    <Route path='/users' render={ () => (<UsersContainer />) } />
                    <Route path='/login' render={ () => (<Login />) } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
