import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//test
class App extends Component {
  state = {
    number :0,
  }
  handaddnum = () =>{
    const {number} = this.state
    console.log(number)
    this.setState({number : number +1})
  }


//  function a()  {}
//  a = () => {}

  handsubnum = () =>{
    //const n;
    //n = this.state.n;
    const {number} = this.state
    console.log(number)
    this.setState({number : number -1})
  }
  
  render() {
    const { number} = this.state
    return (
      <div className="App">
        <button onClick={this.handaddnum}>Add</button>
        <div>{ number}</div>
        <button onClick={this.handsubnum}>sub</button>
      </div>
    );
  }
}

export default App;
