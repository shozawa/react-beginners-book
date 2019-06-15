import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const names = ['Alice', 'Bob', 'Carol'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {names.map(name => (
          <p>Hello, {name}.</p>
        ))}
      </header>
    </div>
  );
};

export default App;
