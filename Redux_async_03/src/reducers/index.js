import { combineReducers } from 'redux'
import {
  SELECT_WORD, INVALIDATE_WORD,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedWord = (state = 'tokyo', action) => {
  console.log('🆎selectedWord');
  console.log(action);
  switch (action.type) {
    // SELECT_WORD のときだけ、action.wordを格納
    case SELECT_WORD:
      return action.word
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
},
  action) => {
  switch (action.type) {
    // "再読込み" ボタンが押されたら
    // didInvalidateプロパティをtrueで上書き
    case INVALIDATE_WORD:
      return {
        ...state,
        didInvalidate: true
      }
    // 読み込みリクエストを、ダウンロード完了前は
    //  isFetchingをtrue
    // didInvalidate をfalse
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    //非同期でデータ取得後はitemsに格納
    // isFetching は false
    // dvdInvalidate は falseにしておいて、"再読込"ボタンを押されると
    // 反転させる。

    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByWord = (state = {}, action) => {
  console.log('📫postsByWord');
  console.log(action);
  switch (action.type) {
    case INVALIDATE_WORD:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.word]: posts(state[action.word], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByWord,
  selectedWord
})

export default rootReducer
