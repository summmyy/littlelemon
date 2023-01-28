import Specials from './Specials'
import Testimonials from './Testimonals'
import About from './About'
import { useReducer} from 'react'

function Main(){
    const initialState = {avaibleTime : ['17:00', '18:00', '19:00',
         '20:00', '21:00','22:00']}
    function UpdateTime(state, action){
        if(action.type === 'Update Time') return{avaibleTime : state.avaibleTime}
        return state;
    }
    function initializeTimes() {
        return { availableTimes: ['17:00', '18:00', '19:00',
        '20:00', '21:00','22:00'] };
      }

        const [state, dispatch] = useReducer(UpdateTime, initialState, initializeTimes);
        const { availableTimes } = state;

    return(
    <div className='Main'>
        <Specials />
        <Testimonials />
        <About />
    </div>
    );
    }

export default Main;