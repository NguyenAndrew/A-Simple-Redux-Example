import React, { Component } from 'react';
import { connect } from 'react-redux';

class Output extends Component {

    reverseString(input) {
        return input.split('').reverse().join('');
    } 

    render() {
        return (
            <div>
                Output: {this.reverseString(this.props.submittedValue)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Output);