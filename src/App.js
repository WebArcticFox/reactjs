import React from 'react';
import './App.css';
import Header from "./base/header";
import Nav from "./base/nav";
import Profile from "./content/profile";
import Footer from "./base/footer";


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