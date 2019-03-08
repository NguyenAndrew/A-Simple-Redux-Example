import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div>
                Output: {this.props.submittedValue}
            </div>
        );
    }
}

export default Output;