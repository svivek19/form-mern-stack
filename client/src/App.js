import React, { useState } from 'react';
import axios from 'axios';
import './App.css'



function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('mongodb://localhost:5000', {
        firstname,
        lastname,
        number,
        email,
        password
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form>

        <label>Firstname:</label>
        <input type="text" required value={firstname} onChange={(e) => setFirstname(e.target.value)} />

        <label>Lastname:</label>
        <input type="text" required value={lastname} onChange={(e) => setLastname(e.target.value)} />

        <label>Number:</label>
        <input type="text" required value={number} onChange={(e) => setNumber(e.target.value)} />

        <label>Email:</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input
          type="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>

    </div>
  );
}

export default App;
