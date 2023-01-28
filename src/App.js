import React from 'react';
import './App.css';
import Header from './CallToAction.js'
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About'
import Orders from './Orders'
import Login from './Login'
import Specials from './Specials';
import BookingPage from './BookingPage';


function App() {
  return (
    <div className='App'>
    <Router>
    <Nav />
    <Switch>
            <Route path='/Home'/>
            <Route path='/About' component={About}/>
            <Route path='/Menu' component={Specials}/>
            <Route path='/Reservation' component={BookingPage}/>
            <Route path='/Order Online' component={Orders}/>
            <Route path='/Login' component={Login}/>
      </Switch>
    <Header />
    <Main />
    <Footer />
    </Router>
    </div>
  );
}

export default App;
