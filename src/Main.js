import greek from './images/smallGreek.png'
import bruh from './images/bruchetta.png'
import dessert from './images/lemon dessert.jpg'
import john from './images/John.png'
import jimmy from './images/Jimmy.png'
import lola from './images/Lola.png'
import mary from './images/Mary.png'
import about1 from './images/Mario and Adrian A.jpg'
import about2 from './images/restauranfood.jpg'


function Main(){
    return(
    <div className='Main'>
        <div className="Specials">
            <h1>Specials &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;
                <button className='SpecialsButton'>Online Menu</button>
                </h1>
        </div>
        <div className='dishes'>
            <div className="dish1">
                <img src={greek} alt='greek salad' width={200} height={200}/>
                <p><b>Greek Salad &emsp;&emsp;&emsp; $12.00</b></p>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
                <p><b>Order a delivery 🚗</b></p>
            </div>
            <div className="dish2">
            <img src={bruh} alt='greek salad' width={200} height={200}/>
                <p><b>Bruchetta &emsp;&emsp;&emsp; $8.95</b></p>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
                <p><b>Order a delivery 🚗</b></p>
            </div>
            <div className="dish3">
            <img src={dessert} alt='greek salad' width={200} height={200}/>
                <p><b>Lemon Dessert &emsp;&emsp;&emsp; $5.90</b></p>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
                <p><b>Order a delivery 🚗</b></p>
            </div>
        </div>
        <div className='testimonials'>
            <div className='testimonialsHeading'>
            <h1>Testimonials</h1>
            </div>
        <div className='testimonialsSection'>
            <div className='review1'>
                <h3>JOHN</h3>
                <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                <img src={john} alt='customer named john' width={150} height={150} />
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>

                </div>
            <div className='review2'>
                <h3>MARY</h3>
                <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                <img src={mary} alt='customer named mary' width={150} height={150}/>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
            </div>
            <div className='review3'>
                <h3>JIMMY</h3>
                <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                <img src={jimmy} alt='customer named jimmy' width={150} height={150}/>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
            </div>
            <div className='review4'>
                <h3>LOLA</h3>
                <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                <img src={lola} alt='customer named lola' width={150} height={150}/>
                <p> Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor.
                </p>
            </div>
            </div>
        </div>
        <div className='About'>
            <div className='AboutText'>
                <h1>About</h1>
            </div>
            <div className='AboutImages'>
            <img className='About1' src={about1} alt='our chefs' width={100} height={180}/>
            <img className='About2' src={about2} alt='our food' width={100} height={180}/>
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
    );
    }

export default Main;