import React, { Component } from 'react';
import '../index.css'

class Entry extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        list: this.props.list,
        doneList: this.props.doneList
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((data, index) => <li key={index + data} onClick={this.props.clickOff}>{data}</li>)}
                </ul>
                <ul>
                    {this.state.doneList.map((data, index) => <li className="crossed-line" key={index + data} onClick={this.props.clickOn}>{data}</li>)}
                </ul>
            </div>
        );
    }
}

export default Entry;