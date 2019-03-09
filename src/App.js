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
  render() {
    return (
      <div className="App">
        <Input />
        <Output />
      </div>
    );
  }
}

export default App;