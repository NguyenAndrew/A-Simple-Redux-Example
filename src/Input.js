import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitValue } from './actions/submittedValueActions';

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

const mapActionsToProps = {
    onSubmitValue: submitValue
}

export default connect(null, mapActionsToProps)(Input);