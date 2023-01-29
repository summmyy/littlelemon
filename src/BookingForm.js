import React,{useState, useReducer} from 'react';
import {useNavigate} from 'react-router-dom'

function BookingForm(props){


        const [inputValue, setInputValue] = useState('');

        function handleChange(event) {
          setInputValue(event.target.value);
        }

            const [date, setDate] = useState('');
            const [state, dispatch] = useReducer(props.updateTimes, props.initializeTimes);

            function handleDateChange(event) {
                setDate(event.target.value);
                dispatch({ type: 'Update Time', date });
            }


                function handleSubmit (formData){
                  formData.preventDefault();
                  props.submitForm(formData);
                }

                    const [formData, setFormData] = useState('');
                    const navigate = useNavigate();

                    function handleSubmit(event) {
                      event.preventDefault();
                      // handle form data here
                      // for example, you can save the form data to state
                      setFormData(event.target.elements);
                      navigate('/Confirmation');
                    }


    return(
        <div className="BookingForm">
            <h1>Book Now</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    {props.availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="0" min="1" max="10" id="guests" value={inputValue} onChange={handleChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date Night</option>
                    <option>Just Because</option>
                </select>
                <div className='BookingButton'>
                <button type="submit" value="Make Your reservation">Reserve</button>
                </div>
            </form>
        </div>
    )
    };

export default BookingForm;