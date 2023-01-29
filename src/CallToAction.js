import headerImg from './images/restaurantChefB.jpg'
import {useNavigate} from 'react-router-dom'


function CallToAction(){

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        navigate('/Login')
    }


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
    <button onClick={handleSubmit} className='HeaderButton'>Login</button>
</div>
</div>
);

}

export default CallToAction;