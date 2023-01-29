import Nav from './Nav.js'

function ConfirmedBooking(){
    return(
        <>
        <Nav />
        <div className='ConfirmedBooking'>
        <h1>Booking Receipt</h1>
        <h2>Your Booking has been confirmed. See You Soon!</h2>
        </div>
        </>
    )
}

export default ConfirmedBooking;