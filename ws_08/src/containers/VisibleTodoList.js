import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'


function getVisibleTodos(todos, filter_type) {
    switch (filter_type) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(
                (t)=>(!t.completed)
            );
        case 'SHOW_COMPLETED':
        return todos.filter(
            (t)=>(t.completed)
        );
        default:
            break;
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: (id) => { dispatch(toggleTodo(id)) }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;