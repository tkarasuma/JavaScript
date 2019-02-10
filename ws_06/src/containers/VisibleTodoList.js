import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'


function mapStateToProps(state){
    return {
        todos:state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        onTodoClick:(id)=>{dispatch(toggleTodo(id))}
    }
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default VisibleTodoList;