import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectWord, fetchPostsIfNeeded, invalidateWord } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
    static propTypes = {
        selectedWord: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }
    //最初のページ読み込み時に一回だけ実行される
    componentDidMount() {
        const { dispatch, selectedWord } = this.props
        dispatch(fetchPostsIfNeeded(selectedWord))
    }
    //
    // この関数の内部で this.props とすると古いプロップスになる
    //引数で渡したパラメータnに実行時、新しいプロップスが渡される。 
    // componentWillReceiveProps(n) {
    //   console.log("⚡componentWillReceiveProps");
    //   if (n.selectedWord !== this.props.selectedWord) {
    //     const { dispatch, selectedWord } = n
    //     dispatch(fetchPostsIfNeeded(selectedWord))
    //   }
    // }


    // 上記のcomponentWillReceivePropsは
    // 非推奨になっているようで、代わりにこっちを使う
    //引数で渡したパラメータpに実行時、古いプロップスが渡される。
    // dispatchの引数は　plain object アクションではなく
    // middleware依存の Async アクションということらしい。
    componentDidUpdate(p) {
        if (p.selectedWord !== this.props.selectedWord) {
            const { dispatch, selectedWord } = this.props
            dispatch(fetchPostsIfNeeded(selectedWord))
        }
    }

    handleChange = nextWord => {
        this.props.dispatch(selectWord(nextWord))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const { dispatch, selectedWord } = this.props

        dispatch(invalidateWord(selectedWord))
        dispatch(fetchPostsIfNeeded(selectedWord))
    }
    render() {
        const { selectedWord, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0
        return (
            <div>
                <Picker value={selectedWord}
                    onChange={this.handleChange}
                    options={['tokyo', 'osaka', 'kyoto']} />
                <p>
                    {lastUpdated &&
                        <span>
                            最終更新日{new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
                        </span>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>ロード中...</h2> : <h2>空.</h2>)
                    : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
                {!isFetching &&
                    <button className="btn btn-warning mt-2" onClick={this.handleRefreshClick}>
                        再読込み
            </button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {

    // まずは大きな塊から取り出し
    const { selectedWord, postsByWord } = state
    // ES6の新しい文法で混乱した
    // postsByWord[selectedWord]は
    // {
    //   didInvalidate: false​​​,
    //   isFetching: false​​​,
    //   items: Array(26) [ {…}, {…}, {…}, … ]​​​,
    //   lastUpdated: 1529304245998
    // }
    // のようなオブジェクト
    // 下記のように、items: posts と記述すると
    //なんと、postsがプロパティ名になり、Array(26) [ {…}, {…}, {…}, … ]​​​が対応する値になる。

    const {
        isFetching,
        lastUpdated,
        items: posts
    } =
        postsByWord[selectedWord] ||
        {
            isFetching: true,
            items: []
        }
    //上記のようにstateのpostsByWordからデータをとりだし、下記のようにプロップスをつくる。
    return {
        selectedWord,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
