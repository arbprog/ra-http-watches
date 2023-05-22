import React from 'react';
import './App.css';
import Watches from '../Watches/Watches';

function App() {
  return (
    <Watches items={[{ name: 'UTC', zone: 0 }]}/>
  );
}

export default App;