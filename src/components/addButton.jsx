import React, { Component } from 'react';

class AddEntry extends Component {
    state = { 
        isPressed: false,
    } 
    render() { 
        return (
            <button>+</button>
        );
    }
}
 
export default AddEntry;