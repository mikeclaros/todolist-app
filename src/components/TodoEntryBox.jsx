import React, { Component } from 'react'
import Entry from './Entry.jsx'
import Banner from './Banner.jsx'
import '../index.css'

class TodoEntryBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: JSON.parse(sessionStorage.getItem('list')) || [],
            doneList: JSON.parse(sessionStorage.getItem('doneList')) || [],
            setList: new Set(),
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        let { setList, value, list } = this.state
        if (!setList.has(value)) {
            setList.add(value)
            list.unshift(value)
            sessionStorage.setItem('list', JSON.stringify(this.state.list))
        }
        this.setState({ value: '' })
        document.getElementById("entry").reset()
        event.preventDefault()
    }

    updateLists = () => {
        this.setState({
            list: this.state.list,
            doneList: this.state.doneList,
            setList: this.state.setList
        })
        let { list, doneList } = this.state
        sessionStorage.setItem('list', JSON.stringify(list))
        sessionStorage.setItem('doneList', JSON.stringify(doneList))
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

    clearList = (event) => {
        let { list, doneList, setList } = this.state
        list.splice(0, list.length)
        doneList.splice(0, doneList.length)
        setList.clear()
        sessionStorage.clear()
        this.updateLists()
    }

    render() {
        return (
            <div className='container'>
                <Banner />
                <div>
                    <form className="float-left" id="entry" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter todo..." onChange={this.handleChange} />
                    </form>
                    <form className="fleft-small-margin">
                        <button onClick={this.clearList}>Clear</button>
                    </form>
                </div>

                <div className="list-config">
                    <Entry list={this.state.list} doneList={this.state.doneList} clickOff={this.handleClickOff} clickOn={this.handleClickOn} />
                </div>
            </div>

        )
    }
}

export default TodoEntryBox