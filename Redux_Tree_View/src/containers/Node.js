import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Node extends Component {
  // カウンターのインクリメントのクリックイベント
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }
// 子ノード追加のクリックイベント
  handleAddChildClick = e => {
    e.preventDefault()

    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    // 親ノードのchildIdsに追加
    addChild(id, childId)
  }
//親ノードから指定したidの子ノードを削除
  handleRemoveClick = e => {
    e.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    //自身が属する親ノードのchildIdsから自身のidを削除
    removeChild(parentId, id)
    //自身のオブジェクトを削除
    deleteNode(id)
  }
// 子ノードを表示する関数
// 自身(Node)をラップするConnectedNodeコンポーネントを再帰的に呼び出し
  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { id, counter, parentId, childIds } = this.props
    return (
      <div>
        <p className={"d-inline-block bg-info text-white  rounded-left"}>🌺{id}</p>
        <p className={"d-inline-block bg-dark text-white mr-1 px-3 rounded-right"}>{counter}</p>
        <button className={'btn btn-primary mr-1 mb-1 p-0'} onClick={this.handleIncrementClick}>
          増加
        </button>
        {typeof parentId !== 'undefined' &&
          <button className={'btn btn-danger mr-1 mb-1 p-0'} onClick={this.handleRemoveClick}>
            ← 要素の削除
          </button>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <p className={"d-inline-block alert alert-success p-0 rounded"} style={{cursor:"pointer"}}　 onClick={this.handleAddChildClick}>🌺子要素追加</p>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
