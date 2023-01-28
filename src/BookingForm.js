import React,{useState} from 'react';

function BookingForm(props){


        const [inputValue, setInputValue] = useState('');

        function handleChange(event) {
          setInputValue(event.target.value);
        }
        const { availableTimes, dispatch } = props;
        const [date, setDate] = useState('');

        function handleDateChange(event) {
          setDate(event.target.value);
          dispatch({ type: 'Update Time', date });
        }

    return(
        <div className="BookingForm">
            <form >
                <label for="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label for="res-time">Choose time</label>
                <select id="res-time ">
                    {props.avaibleTime.map((time, index) => (<option key={index} value={time}>{time}</option>))}
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={inputValue} onChange={handleChange}/>
                <label for="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    )
    };

export default BookingForm;