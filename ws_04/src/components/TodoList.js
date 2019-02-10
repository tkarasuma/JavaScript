import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

//classNameでBootsrapに関する設定
const TodoList = ({todos})=>(
    <ul className="list-group mx-auto p-3 bg-info rounded" style={{maxWidth:'36rem'}}>
    {todos.map(
        (todo)=>(<Todo key={todo.id} {...todo} />)
    )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  }
  
export default TodoList
