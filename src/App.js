import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import { connect } from 'react-redux';

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);
if (canUseDOM) {
  require('./App.css');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Output submittedValue={this.props.submittedValue} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, null)(App);