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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    </div>
    </>
  );
}

export default SignUp;
