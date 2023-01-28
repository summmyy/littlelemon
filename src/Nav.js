import React from 'react';
import logo from './images/Logo.svg';
import { Link,} from 'react-router-dom';


function Nav(){

    return(
    <div>
    <nav className='Nav'>
        <img src={logo} alt="little lemon logo" width='250px' height='50px'/>
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/About">About </Link></li>
            <li><Link to="/Menu">Menu </Link></li>
            <li><Link to="/Reservation">Reservation </Link></li>
            <li><Link to="/Order Online">Order Online </Link></li>
            <li><Link to="/Log In">Log In </Link></li>
        </ul>
        </nav>
    </div>
    );
}

export default Nav;