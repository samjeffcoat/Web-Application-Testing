import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
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

   handleBallsChanges= ()=> {
     const { balls } = this.state; 
     if (balls <4) {
       this.setState(prevState => ({
         balls: prevState.balls +1
       }))
     } else if (balls === 4) {
       this.setState({balls: 0})
       alert("Four balls, you get a walk to first. Click to reset!")
     }
   }
   render(){
  return (
    <div className="App">
      <Display balls= {this.state.balls}  strikes= {this.state.strikes}/>
      <Dashboard addBalls = {this.handleBallsChanges} />
 
    </div>
  );
}
}
export default App;
