import about1 from './images/Mario and Adrian A.jpg'
import about2 from './images/restauranfood.jpg'
import Nav from './Nav.js'

function About(){
    return(
        <div>
            
            <div className='About'>
            <div className='AboutText'>
                <h1>About</h1>
            </div>
            <div className='AboutImages'>
            <img className='About1' src={about1} alt='our chefs' width={150} height={200}/>
            <img className='About2' src={about2} alt='our food' width={150} height={200}/>
            </div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur<br/>
            adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua.<br/>
            Euismod lacinia at quis risus. Dignissim<br/>
            suspendisse in est ante in nibh mauris<br/>
            cursus mattis.
            </p>
            </div>
        </div>
    )
}

export default About;