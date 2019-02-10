import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTodo from '../actions/index.js';

let AddTodo = ({ dispatch }) => {
    let input;
    //className,htmlForなどはbootstrapのため
    return (
        <div className="form-group">
            <label htmlFor="todo_name">Todoの名称</label>
            <input type="text" className="form-control" id="todo_name" placeholder="Todoの名称" ref={(node) => { input = node }} />
            <button className="btn btn-primary btn-lg btn-block mt-1" onClick={() => { dispatch(addTodo(input.value)); input.value="" }}>新規追加</button>
        </div>
    )
}
AddTodo = connect()(AddTodo);
export default AddTodo;
