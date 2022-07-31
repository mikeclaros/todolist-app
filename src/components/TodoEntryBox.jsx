import React, { Component } from 'react';
import Entry from './Entry'

class TodoEntryBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        let { list, value } = this.state
        list.unshift(value)
        this.setState({
            value: ''
        })
        document.getElementById("entry").reset();
        console.log(list)
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form id="entry" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter todo..." onChange={this.handleChange} />
                </form>
                <Entry list={this.state.list} />
            </div>

        );
    }
}

export default TodoEntryBox;