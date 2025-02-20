import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitTrick = event => {
    event.preventDefault();
    const newTrick = {
      ...this.state,
      id: Date.now()
    }
    this.props.addTrick(newTrick);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
    })
  }

  render = () => {
    return (
      <form>
        <select className='stance' name='stance' id='stance' onChange={event => this.handleChange(event)}>
          <option value=''>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>

        <input
          className='name'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <select className='obstacle' name='obstacle' id='obstacle' onChange={event => this.handleChange(event)}>
          <option value=''>Choose your Obstacle</option>
          <option value='flat ground'>Flat Ground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>

        <input
          className='tutorial'
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button className='send-it' onClick={event => this.submitTrick(event)}>Send It!</button>
      </form>
    )
  }
}


export default Form;