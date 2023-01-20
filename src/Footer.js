import logo from './images/Footer.png'


function Footer(){
    return(
    <div className='Footer'>
        <img src={logo} alt="little lemon logo" />
    <div className='DoorMatNav'>
    <h2>DoorMat Navigation</h2>
    <ul>
        <li><a href="#Home">Home </a></li>
        <li><a href="#About">About </a></li>
        <li><a href="Menu">Menu </a></li>
        <li><a href="Reservation">Reservation </a></li>
        <li><a href="Order Online">Order Online </a></li>
        <li><a href="Log In">Log In </a></li>
    </ul>
    </div>
    <div className='Contact'>
    <h2>Contact</h2>
    <ul>
        <li><a href="#Address">Address</a></li>
        <li><a href="#Phone">Phone Number</a></li>
        <li><a href="#Email">Email</a></li>
    </ul>
    </div>
    <div className='SMLinks'>
    <h2>Social Media Links</h2>
    <ul>
        <li><a href="www.Instagram.com">Instagram</a></li>
        <li><a href="www.Twitter.com">Twitter</a></li>
        <li><a href="www.Facebook.com">Facebook</a></li>
    </ul>
    </div>
    </div>
    );

}

export default Footer;