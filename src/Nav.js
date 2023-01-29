import React from 'react';
import logo from './images/Logo.svg';
import { Link, useNavigate} from 'react-router-dom';


function Nav(){
         /*   <li><Link to="/About">About </Link></li>
            <li><Link to="/Menu">Menu </Link></li>
            <li><Link to="/Order Online">Order Online </Link></li>
            */

            const navigate = useNavigate();

            function handleClick(event){
                event.preventDefault()
                navigate('/')
            }
    return(
    <div>
    <nav className='Nav'>
        <img src={logo} alt="little lemon logo" width='250px' height='50px' onClick={handleClick}/>
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/Reservation">Reservation </Link></li>
            <li><Link to="/Login">Log In </Link></li>
        </ul>
        </nav>
    </div>
    );
}

export default Nav;