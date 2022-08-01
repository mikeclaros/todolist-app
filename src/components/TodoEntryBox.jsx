import React, { Component } from 'react';
import Entry from './Entry'

class TodoEntryBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: [],
            doneList: [],
            setList: new Set(),
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    // handleSubmit = (event) => {
    //     let { list, value } = this.state
    //     list.unshift(value)
    //     this.setState({
    //         value: ''
    //     })
    //     document.getElementById("entry").reset();
    //     console.log(list)
    //     event.preventDefault();
    // }

    handleSubmit = (event) => {
        let { setList, value, list } = this.state
        if (!setList.has(value)) {
            setList.add(value)
            list.unshift(value)
        }
        this.setState({ value: '' })
        document.getElementById("entry").reset()
        event.preventDefault()
    }

    updateLists = () => {
        this.setState({
            list: this.state.list,
            doneList: this.state.doneList
        })
    }

    deleteFromList = (list, val) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === val) {
                list.splice(i, 1)
            }
        }
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
                <form id="entry" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter todo..." onChange={this.handleChange} />
                </form>
                <Entry list={this.state.list} doneList={this.state.doneList} clickOff={this.handleClickOff} clickOn={this.handleClickOn} />
            </div>

        );
    }
}

export default TodoEntryBox;