import React from 'react';
import './App.css';
import Header from './CallToAction.js'
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default function Homepage(){
    return(
        <div className='App'>
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}