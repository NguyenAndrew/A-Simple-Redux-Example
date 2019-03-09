// React Imports
import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

class Input extends Component {
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input: <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}

// The first value would be mapStateToProps, if mapStateToProps was needed.
// Connecting mapActionsToProps lets this component use actions defined in ../Redux/actions from this.props
export default connect(null, mapActionsToProps)(Input);