import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

//classNameでBootsrapに関する設定
const App = () => (
    <div>
    <h1 className="text-center alert alert-info ">Todoリスト</h1>
        <VisibleTodoList />
        <AddTodo />
    </div>
)

export default App;