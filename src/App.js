import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav/>
                <div className="app_wrapper_content">
                    <Route path='/profile' render={ () => (<Profile state={props.state.profilePage}/>) } />
                    <Route path='/message' render={ () => (<Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage} />) } />
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
