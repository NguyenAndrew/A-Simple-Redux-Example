import React, { Component } from 'react';

class Output extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Output: {this.props.submittedValue}
            </div>
        );
    }
}

export default Output;