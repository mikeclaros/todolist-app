import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import TodoEntryBox from './components/TodoEntryBox.jsx'


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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Table />)