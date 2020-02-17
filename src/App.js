import React from 'react';
import './App.css';
import Lottery from './Lottery';
function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxBalls="4" />
    </div>
  );
}

export default App;
