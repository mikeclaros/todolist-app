import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        buttonName: this.props.name
    }

    render() {
        return (
            <button onSubmit={this.props.buttonFunction}>this.state.buttonName</button>
        );
    }
}

export default Button;