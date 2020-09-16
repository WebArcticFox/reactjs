import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;