import Nav from './Nav.js';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    setFormData({ email: email.value, password: password.value });
    navigate("/Reservation");
  }
  function SignUp(event){
    event.preventDefault();
    navigate('/SignUp');
  }
  return (
    <div>
    <Nav />
    <div className='Login'>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password"  />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <button type='submit' onClick={SignUp}>Sign Up</button>
    </div>
    </div>
  );
}

export default Login;
