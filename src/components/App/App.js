import React, { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import { fetchData } from '../../apiCalls';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    fetchData('http://localhost:3001/api/v1/tricks').then(data => {
      this.setState({ tricks: data })
    })
  }

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] })
  }

  render = () => {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} />
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;