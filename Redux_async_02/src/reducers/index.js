import { combineReducers } from 'redux'
import { SELECT_WORD, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_WORD } from '../actions'


const selectedWord = (state = 'tokyo', action) => {
    switch (action.type) {
        case SELECT_WORD:
            return action.word
        default:
            return state
    }
}
// posts の初期値
const init_posts = {
    isFetching: false,
    didInvalidate: false,
    items: []
}


const posts = (state = init_posts, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            // didInvalidateは強制的に更新したいときだけ使う。
            // いまは必要ない。
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        // itemsにはjsonデータから引っ張ってき配列を入れる。
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt,
                didInvalidate: false
            }
        // didInvalidate をfalse → true　にするだけ。
        case INVALIDATE_WORD:
            return {
                ...state,
                didInvalidate: true
            }
        default:
            return state
    }
}

const postsByWord = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
        case INVALIDATE_WORD:
            return {
                ...state,
                [action.word]: posts(state[action.word], action)
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsByWord,
    selectedWord
})

export default rootReducer