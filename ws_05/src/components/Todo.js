import React from 'react';
import PropTypes from 'prop-types';

//classNameでBootsrapに関する設定
const Todo = ({text,completed})=>(
    <li className={completed?"list-group-item bg-secondary text-dark":"list-group-item"}>{text}</li>
)

Todo.propTypes ={
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
}

export default Todo;