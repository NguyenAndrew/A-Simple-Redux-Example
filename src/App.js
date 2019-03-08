import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);
if (canUseDOM) {
  require('./App.css');
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      'inputValue': '',
      'submittedValue': 'Nothing has been submitted yet'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ submittedValue: this.state.inputValue });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Input inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Output submittedValue={this.state.submittedValue} />
      </div>
    );
  }
}

export default App;