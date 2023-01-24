import john from './images/John.png'
import jimmy from './images/Jimmy.png'
import lola from './images/Lola.png'
import mary from './images/Mary.png'

function Testimonials(){
    return(
        <div>
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
        </div>
    )
};

export default Testimonials;