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
                <Nav state={props.state.siteData} />
                <div className="app_wrapper_content">
                    <Route path='/profile' render={ () => (<Profile profilePage={props.state.profilePage} addPost={props.addPost} changeTextPost={props.changeTextPost} />) } />
                    <Route path='/message' render={ () => (<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} changeTextMessage={props.changeTextMessage} />) } />
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
