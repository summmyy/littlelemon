import BookingForm from "./BookingForm";
import React, { useEffect, useState, useNavigate, useCallback} from 'react';
import Nav from './Nav';

function BookingPage(){

    const [availableTimes, setAvailableTimes] = useState(['11:00', '12:00', '13:00', '14:00', '15:00','16:00',
    '17:00', '18:00', '19:00', '20:00', '21:00','22:00']);

    function updateTimes(date) {
        // logic to update the available times based on the selected date
        setAvailableTimes(['11:00', '12:00', '13:00', '14:00', '15:00','16:00',
        '17:00', '18:00', '19:00', '20:00', '21:00','22:00']);
    }

    /* const [day, setDay] = useState('28-01-2023');
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
        .then((response) => response.json())
        .then((jsonData) => setDay(jsonData.date))
        .catch((error) => console.log(error));
    },[]) */

    /* const updateTimes = (state, action) => {
        const selectedDate = action.date;
        const availableTimes = fetchAPI(selectedDate);
        return availableTimes;
    }

    const initializeTimes = () => {
        const today = new Date();
        const availableTimes = fetchAPI(today);
        return availableTimes;
    }

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submitForm = useCallback((formData) => {
        if (submitAPI(formData)) {
          navigate('/booking-confirmed');
        }
        else {
            setError("There was an error submitting the form. Please try again.");
        }},[navigate]);
 */

    function initializeTimes() {
        // logic to set the initial available times
       setAvailableTimes(['11:00', '12:00', '13:00', '14:00', '15:00','16:00',
        '17:00', '18:00', '19:00', '20:00', '21:00','22:00']);
    }


    return(
        <div>
        <Nav />
        <div className="BookingPage">
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} initializeTimes={initializeTimes}/>
        </div>
        </div>
    )
};

export default BookingPage;