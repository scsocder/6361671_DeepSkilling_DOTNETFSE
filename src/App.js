import React from 'react';
import './App.css';

function App() {
  // Step 1: Create object list of office spaces
  const officeSpaces = [
    {
      name: 'Downtown Workspace',
      rent: 55000,
      address: '123 MG Road, Bengaluru',
      image: 'https://via.placeholder.com/200x150?text=Office+1'
    },
    {
      name: 'Tech Hub',
      rent: 72000,
      address: '98 IT Park, Hyderabad',
      image: 'https://via.placeholder.com/200x150?text=Office+2'
    },
    {
      name: 'Co-Work Studio',
      rent: 61000,
      address: '45 Cyber City, Gurugram',
      image: 'https://via.placeholder.com/200x150?text=Office+3'
    },
    {
      name: 'Affordable Space',
      rent: 45000,
      address: '55 Salt Lake, Kolkata',
      image: 'https://via.placeholder.com/200x150?text=Office+4'
    }
  ];

  // JSX heading
  const heading = <h1 style={{ color: '#333', textAlign: 'center' }}>🏢 Office Space Rental App</h1>;

  return (
    <div className="App" style={{ padding: '20px' }}>
      {heading}

      {/* Loop through office list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {officeSpaces.map((office, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '250px' }}>
            {/* Image */}
            <img src={office.image} alt={office.name} style={{ width: '100%', borderRadius: '5px' }} />
            
            {/* Office details */}
            <h3>{office.name}</h3>
            <p>{office.address}</p>
            <p style={{ 
              color: office.rent < 60000 ? 'red' : 'green',
              fontWeight: 'bold'
            }}>
              Rent: ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
