import React from 'react';
import logo from './logo.svg';
import './App.css';

//create an isolated function aka a "unit" that is easy to test
 export const sum = (a, b) => a +b;
//setting up our app with a class component and declaring initial state with 0 balls and 0 strikes because that will be  our initial values for each new hitter, inning, etc 

 class App extends React.Component {
   constructor(){
   super();
    this.state= {
      balls: 0,
      strikes: 0,
    }
   }
   render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}
}
export default App;
