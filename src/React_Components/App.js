// React Imports
import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

// CSS Import (this style is used when testing React Components on Node.js instead of the Browser)
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
        <Input defaultInput={'Hello World!'}/>
        <Output />
      </div>
    );
  }
}

export default App;