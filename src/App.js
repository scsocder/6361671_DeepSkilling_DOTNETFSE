import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import SyntheticClick from './components/SyntheticClick';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🎯 React Event Examples</h1>
      <Counter />
      <SayWelcome />
      <SyntheticClick />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
