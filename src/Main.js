import Specials from './Specials'
import Testimonials from './Testimonals'
import About from './About'
import { useReducer} from 'react'

function Main(){
/*  const initialState = [{availableTimes : ['17:00', '18:00', '19:00',
         '20:00', '21:00','22:00']}]
    function UpdateTime(state, action){
        if(action.type === 'Update Time') return{availableTimes : state.availableTimes}
        return state;
    }
    function initializeTimes() {
        return (
            availableTimes.length ?
            availableTimes.map((time) => <option key={time}>{time}</option>)
             : <option>No times available</option>
        )
      }

        const [state, dispatch] = useReducer(UpdateTime, initialState, initializeTimes);
        const { availableTimes } = state;


    function updateTimes(date) {
        return ['17:00', '18:00', '19:00', '20:00', '21:00','22:00'];
    }

    function initializeTimes() {
        return ['17:00', '18:00', '19:00', '20:00', '21:00','22:00'];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    */

    return(
    <div className='Main'>
        <Specials />
        <Testimonials />
        <About />
    </div>
    );
    }

export default Main;