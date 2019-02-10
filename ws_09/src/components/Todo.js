import React from 'react';
import PropTypes from 'prop-types';

//classNameでBootsrapに関する設定
const Todo = ({text,completed,onClick})=>(
    <li className={completed?"list-group-item bg-secondary text-dark":"list-group-item"} onClick={onClick}>{text}</li>
)

Todo.propTypes ={
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Todo;