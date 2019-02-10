import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todo from './reducers'
import { createStore } from 'redux';
import App from './components/App'
import addTodo from './actions'

let store = createStore(todo);
store.dispatch(addTodo('Todo 1番目'));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
