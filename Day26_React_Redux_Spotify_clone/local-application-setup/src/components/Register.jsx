import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  const { handleRegister } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="input-field"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="input-field"
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="input-field"
      />
      <button type="submit" className="btn">Register</button>
    </form>
  );
};

export default Register;
