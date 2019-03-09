import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import { connect } from 'react-redux';
import { submitValue } from './actions/submittedValueActions';

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);
if (canUseDOM) {
  require('./App.css');
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'inputValue': '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmitValue(this.state.inputValue);
    event.preventDefault();
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <Input inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Output submittedValue={this.props.submittedValue} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapActionsToProps = {
  onSubmitValue: submitValue
}

export default connect(mapStateToProps, mapActionsToProps)(App);