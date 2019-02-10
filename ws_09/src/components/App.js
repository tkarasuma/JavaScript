import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import Footer from "./Footer";
import UndoRedo from "../containers/UndoRedo";

//classNameでBootsrapに関する設定
const App = () => (
    <div>
        <h1 className="text-center alert alert-info ">Todoリスト</h1>
        <UndoRedo />
        <Footer />
        <VisibleTodoList />
        <AddTodo />
    </div>
)

export default App;