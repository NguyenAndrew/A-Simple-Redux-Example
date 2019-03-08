import React, { Component } from 'react';
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

        <div className="Input">
          <form onSubmit={this.handleSubmit}>
            <label>
              Input: <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <Output submittedValue={this.state.submittedValue}/>

      </div>
    );
  }
}

export default App;