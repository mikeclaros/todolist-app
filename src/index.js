import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import AddButon from './components/addButton'
import TodoEntryBox from './components/TodoEntryBox';


class Table extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <TodoEntryBox />
            </div>
        );
    }
}

export default Table;

function enterTodo(list, todo) {
    list.unshift(todo)
    return list
}

function delTodo(entryToDelete, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === entryToDelete) {
            list.splice(i, 1)
        }
    }

    return list
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Table />)