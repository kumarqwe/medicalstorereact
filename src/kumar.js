import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './login.css';


function Login() {
  const [Name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://localhost:44363/api/Logins/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, password })
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      const decodedToken = jwt_decode(data.token);
      console.log(decodedToken);
      setIsLoggedIn(true);
    } else {
      console.log(data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button  onClick={handleLogout}>Logout</button>
          <br />
          <Link to="/medicine" className='Link'>
            Medicine
          </Link>
          <br />
          <Link to="/event" className='Link' >
            Events
          </Link>
          <br />
          <Link to="/invitation" className='Link' >
            Invitation
          </Link>
          <br />
          <Link to="/payment" className='Link' >
            Payment
          </Link>
          <br />
          <Link to="/bookingmedicine" className='Link' >
            BookingMedicine
          </Link>
          <br />
          <Link to="/bookingevents" className='Link' >
            BookingEvents
          </Link>
          <br />
          <Link to="/bookinginvitation" className='Link' >
            bookingInvitation
          </Link>
          <br />
          <Link to="/bookingpayments" className='Link' >
            BookingPayments
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={Name} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Login;