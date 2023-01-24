import React from 'react';
import logo from './images/Logo.svg';
import {Routes, Route, Link} from "react-router-dom"
import App from './App'
import About from './About'
import Reservation from './Reservation'
import Orders from './Orders'
import Login from './Login'
import Specials from './Specials';



function Nav(){

    return(
    <div className='Nav'>
    <img src={logo} alt="little lemon logo" width='250px' height='50px'/>
    <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/About">About </Link></li>
        <li><Link to="/Menu">Menu </Link></li>
        <li><Link to="/Reservation">Reservation </Link></li>
        <li><Link to="/Order Online">Order Online </Link></li>
        <li><Link to="/Log In">Log In </Link></li>
    </ul>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Menu' element={<Specials/>}/>
            <Route path='/Reservation' element={<Reservation/>}/>
            <Route path='/Order Online' element={<Orders/>}/>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
    </div>
    );
}

export default Nav;