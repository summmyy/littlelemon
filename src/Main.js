import greek from './images/greekSalad.jpg'
import bruh from './images/bruchetta.png'
import dessert from './images/lemon dessert.jpg'

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
            
        </div>
    </div>
    );
    }

export default Main;