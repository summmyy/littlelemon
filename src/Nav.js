import logo from './images/Logo.svg'


function Nav(){
    return(
    <div className='Nav'>
    <img src={logo} alt="little lemon logo" width='250px' height='50px'/>
    <ul>
        <li><a href="#home">Home </a></li>
        <li><a href="#About">About </a></li>
        <li><a href="Menu">Menu </a></li>
        <li><a href="Reservation">Reservation </a></li>
        <li><a href="Order Online">Order Online </a></li>
        <li><a href="Log In">Log In </a></li>
    </ul>
    </div>
    );
}

export default Nav;