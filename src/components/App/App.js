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

    fetch('http://localhost:3001/api/v1/tricks', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrick)
    })
  }

  deleteTrick = (id) => {
    const filteredTricks = this.state.tricks.filter(trick => trick.id !== id);
    this.setState({ tricks: filteredTricks })

    fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
      method: "DELETE"
    })
  }

  render = () => {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} />
        <Tricks tricks={this.state.tricks} deleteTrick={this.deleteTrick} />
      </div>
    );
  }
}

export default App;