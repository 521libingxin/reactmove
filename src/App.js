import React from 'react';
import Calculator from './abcd.js';
import logo from './logo.svg';
import './App.css';
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
function App() {
  return (
    <div className="App">
      <Calculator></Calculator>
      {/* <header className="App-header" onClick={activateLasers}>
        <img src={logo}  className="App-logo" alt="logo" />
        {numbers}
        <ComponentHeader name="Sara" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
