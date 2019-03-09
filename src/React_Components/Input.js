// React Imports
import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.defaultInput,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSubmitValue(this.state.inputValue);
        event.preventDefault();
    }

    handleReset(event) {
        this.setState({ inputValue: ''});
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <label>
                        Input: <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" />
                </form>
            </div>
        );
    }
}

// state is the state from Redux Store
// props is the props from the parent component (which is App.js in this case)
const mapStateToProps = (state, props) => {
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue
    };
};

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}

// Connecting mapStateToProps lets this component use this.props to get state from the Redux Store and props from the parent component.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// this.props can actually be used normally to get props from the parent, without mapStateToProps.
// However, mapStateToProps can be used to avoid naming conflicts 
// (Example: Imagine defaultInput is a prop on both the Redux Store and the parent. To fix, return defaultInputParent and defaultInputReduxStore in mapStateToProps).
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// By default, the Redux Store takes priority over parent props in this.props.
// If Redux state is not needed, this code can be used: connect(null, mapActionsToProps)(Input)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connecting mapActionsToProps lets this component use actions defined in ../Redux/actions from this.props
export default connect(mapStateToProps, mapActionsToProps)(Input);