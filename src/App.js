import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import NavContainer from "./components/nav/navContainer";
import UsersContainer from "./components/users/usersContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <NavContainer />
                <div className="app_wrapper_content">
                    <Route exact path='/' render={ () => (<Profile />) } />
                    <Route path='/profile' render={ () => (<Profile />) } />
                    <Route path='/message' render={ () => (<DialogsContainer />) } />
                    <Route path='/users' render={ () => (<UsersContainer />) } />
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
