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
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
      </label>
      <input type="email" name="email" />
      <br />
      <label>
        Password:
      </label>
      <input type="password" name="password"  />
      <br />
      <div className='LoginButtons'>
      <button type="submit">Login</button> &emsp;
      <button type='submit' onClick={SignUp}>Sign Up</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Login;
