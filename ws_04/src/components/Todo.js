import React from 'react';
import PropTypes from 'prop-types';

//classNameでBootsrapに関する設定
const Todo = ({text})=>(
    <li className="list-group-item">{text}</li>
)

Todo.propTypes ={
    text:PropTypes.string.isRequired
}

export default Todo;