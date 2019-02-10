import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoApp from './reducers'
import { createStore } from 'redux';
import App from './components/App'
import {addTodo,toggleTodo} from './actions'

let store = createStore(todoApp);
store.dispatch(addTodo('Todo 1番目'));
store.dispatch(addTodo('Todo 2番目'));
store.dispatch(addTodo('Todo 3番目'));
store.dispatch(addTodo('Todo 4番目'));
store.dispatch(addTodo('Todo 5番目'));
store.dispatch(toggleTodo(2));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
