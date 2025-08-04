import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import FlightDetails from './components/FlightDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable
  let page;
  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🎫 Ticket Booking App</h1>

      {/* Login/Logout buttons */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {/* Conditionally render user/guest page */}
      {page}

      {/* Flight details always visible */}
      <FlightDetails />
    </div>
  );
}

export default App;
