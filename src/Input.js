import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Input: <input type="text" value={this.props.inputValue} onChange={this.props.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Input;