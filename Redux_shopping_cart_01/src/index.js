import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
store.dispatch(getAllProducts())

ReactDOM.render(
    <Provider store={store}>
    <h1>ダミーH1</h1>
    </Provider>,
    document.getElementById('root')
)