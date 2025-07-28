// src/App.js
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Shubam Chakraborty" school="KIIT University" total={450} goal={5} />
    </div>
  );
}

export default App;
