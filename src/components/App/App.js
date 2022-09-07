import React, { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import { fetchData } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    fetchData('http://localhost:3001/api/v1/tricks').then(data => {
      console.log(data)
      this.setState({ tricks: data })
      console.log(this.state.tricks)
    })
  }



  render = () => {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;