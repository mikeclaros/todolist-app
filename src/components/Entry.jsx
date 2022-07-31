import React, { Component } from 'react';
import '../index.css'

class Entry extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        list: this.props.list,
        doneList: []
    }

    deleteFromList = (list, val) => {
        console.log("which list?: ", list)
        for (let i = 0; i < list.length; i++) {
            if (list[i] === val) {
                list.splice(i, 1)
            }
        }
    }

    updateLists = () => {
        this.setState({
            list: this.state.list,
            doneList: this.state.doneList
        })
    }

    handleClickOff = (event) => {
        const element = event.target
        const val = element.outerText
        element.classList.toggle("crossed-line")
        this.deleteFromList(this.state.list, val) //remove val from list
        this.state.doneList.unshift(val) //add removed val to deleted list
        this.updateLists()
    }

    handleClickOn = (event) => {
        const element = event.target
        const val = element.outerText
        element.classList.toggle("crossed-line")
        this.deleteFromList(this.state.doneList, val)
        this.state.list.unshift(val)
        this.updateLists()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((data, index) => <li key={index + data} onClick={this.handleClickOff}>{data}</li>)}
                </ul>
                <ul>
                    {this.state.doneList.map((data, index) => <li className="crossed-line" key={index + data} onClick={this.handleClickOn}>{data}</li>)}
                </ul>
            </div>
        );
    }
}

export default Entry;