import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import About from './About'
import Orders from './Orders'
import Login from './Login'
import Specials from './Specials';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ComfirmedBooking';
import SignUp from './SignUp';


function App() {
        /*  <Route path='/About' element={<About />}/>
            <Route path='/Menu' element={<Specials />}/>
            <Route path='/Order Online' element={<Orders />}/>
            */
  return (
    <>
      <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/Reservation' element={<BookingPage />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Confirmation' element={<ConfirmedBooking />} />
            <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
