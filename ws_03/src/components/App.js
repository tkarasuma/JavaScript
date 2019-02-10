import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'

//classNameでBootsrapに関する設定
const App = () => (
    <div>
    <h1 className="text-center alert alert-info ">Todoリスト</h1>
        <VisibleTodoList />
    </div>
)

export default App;