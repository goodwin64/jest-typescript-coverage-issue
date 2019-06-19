import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
