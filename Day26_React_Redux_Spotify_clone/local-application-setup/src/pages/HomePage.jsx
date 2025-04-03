import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome, {user ? user.name : 'Guest'}</h1>
      {user ? (
        <button onClick={handleLogout} className="btn">Logout</button>
      ) : (
        <p>Please log in or register.</p>
      )}
    </div>
  );
};

export default HomePage;
