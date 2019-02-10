export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_WORD = 'SELECT_WORD'


export const selectWord = word => ({
    type: SELECT_WORD,
    word
})
// isFetching: trueにする
export const requestPosts = word => ({
    type: REQUEST_POSTS,
    word
})
//stateに取得したデータを格納し、isFetchingをfalseにする。
export const receivePosts = (word, json) => ({
  type: RECEIVE_POSTS,
  word,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})


// dはdispatch
const fetchPosts = (word) => d => {
    d(requestPosts(word))
    fetch(`https://www.reddit.com/r/${word}.json`)
        .then(res => res.json())
        .then(json => d(receivePosts(word, json)))
}


const shouldFetchPosts = (state, word) => {
    const posts = state.postsByWord[word]
// 対応するwordに対するデータ取得前はpostsは空っぽ undefined
    if (!posts) {
        return true
    }
    // ロード中はいじらない
    if (posts.isFetching) {
        return false
    }
    return false
}
// dはdispatch g はgetState
export const fetchPostsIfNeeded = word => (d, g) => {
    if (shouldFetchPosts(g(),word)) {
        //d すなわち dispatchの引数は　plain object アクションではなく
        // middleware依存の Async アクションということらしい。
        d(fetchPosts(word));
    }
}