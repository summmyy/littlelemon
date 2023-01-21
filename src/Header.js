import headerImg from './images/restaurantChefB.jpg'


function Header(){
return(
<div className='Header'>
<img src={headerImg} alt="chef cooking" width='300' height='300'/>
<div className='heading'>
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <p> Lorem ipsum dolor sit amet, consectetur<br/>
        adipiscing elit, sed do eiusmod tempor<br/>
        incididunt ut labore et dolore magna aliqua. 
    </p>
    <button className='HeaderButton'>Start Free Trail</button>
</div>
</div>
);

}

export default Header;