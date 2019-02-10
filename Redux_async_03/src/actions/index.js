export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_WORD = 'SELECT_Word'
export const INVALIDATE_WORD = 'INVALIDATE_Word'

export const selectWord = word => ({
  type: SELECT_WORD,
  word
})

export const invalidateWord = word => ({
  type: INVALIDATE_WORD,
  word
})

export const requestPosts = word => ({
  type: REQUEST_POSTS,
  word
})
// RECEIVE_POSTS アクションを返す
export const receivePosts = (word, json) => ({
  type: RECEIVE_POSTS,
  word,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})
// Word には　tokyo , kyotoなどの検索後
// REQUEST_POSTS　アクションをディスパッチしたあと、
// 非同期
//fetchにオリジナルのコードではreturnがついてたけど、要る？
const fetchPosts = word => dispatch => {
  dispatch(requestPosts(word))
  //REQUEST_POSTS アクションを発行して、すぐにfetch
  //を実行しているが、非同期処理なので、関数は抜けて処理は次へ進む。
  console.log("👽fetchに入る");
  fetch(`https://www.reddit.com/r/${word}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(word, json)))
}
// 新たにデータを取得するか否か
const shouldFetchPosts = (state, word) => {
  const posts = state.postsByWord[word]
  // postsByWordのなかに　wordプロパティがなければ undefined
  if (!posts) {
    return true
  }
  // ロード中
  if (posts.isFetching) {
    return false
  }
  // 再読込ボタンが押されていたら、selectで選択中のwordは
  // state.postsByWord[word].didInvalidateがtrueになっている。
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = word => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), word)) {
    console.log("🙆fetchPostsIfNeeded");
    return dispatch(fetchPosts(word))
  }
}
