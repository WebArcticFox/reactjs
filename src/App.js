import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav state={props.state.siteData} />
                <div className="app_wrapper_content">
                    <Route exact path='/' render={ () => (<Profile store={props.store} />) } />
                    <Route path='/profile' render={ () => (<Profile store={props.store} />) } />
                    <Route path='/message' render={ () => (<DialogsContainer store={props.store} />) } />
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
