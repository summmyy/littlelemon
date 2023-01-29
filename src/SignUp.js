import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from './Nav.js'

function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, confirmPassword } = event.target.elements;
    setFormData({ name: name.value, email: email.value, password: password.value });

    // you can add validation for name, email, password, and confirmPassword if you want
    if (password.value === confirmPassword.value) {
      navigate("/Reservation");
    }
  }

  return (
    <>
    <Nav />
    <div className="SignUp">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
      </label>
      <input type="text" name="name" required />
      <br />
      <label>
        Email:
      </label>
      <input type="email" name="email" required />
      <br />
      <label>
        Password:
      </label>
      <input type="password" name="password" required />
      <br />
      <label>
        Confirm Password:
      </label>
      <input type="password" name="confirmPassword" required />
      <br />
      <div className="SignUpButton">
      <button type="submit">Sign Up</button>
      </div>
    </form>
    </div>
    </>
  );
}

export default SignUp;
