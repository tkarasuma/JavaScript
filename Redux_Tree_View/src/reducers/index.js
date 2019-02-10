import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE } from '../actions'

//ノードのchildIdsの管理
const childIds = (state, action) => {
  switch (action.type) {
    // id追加
    case ADD_CHILD:
      return [...state, action.childId]
      //id削除
    case REMOVE_CHILD:
      return state.filter(id => id !== action.childId)
    default:
      return state
  }
}

const node = (state, action) => {
  switch (action.type) {
    // 新要素作成
    case CREATE_NODE:
      return {
        id: action.nodeId,
        counter: 0,
        childIds: []
      }
    //インクリメント
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    //それぞれの場合のchildIdsの変更
    case ADD_CHILD:
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      }
    default:
      return state
  }
}
// idがnodeIdのオブジェクトより下層の子ノードのidを配列で取得する関数
//　再帰的な処理に注意
//acc は　accumulatorの略か。配列のバスケット替わり。
const getAllDescendantIds = (state, nodeId) => (
  state[nodeId].childIds.reduce((acc, childId) => (
    [...acc, childId, ...getAllDescendantIds(state, childId)]
  ), [])
)
// ids配列に入っているidのオブジェクトを一括削除してから、stateを返す関数
const deleteMany = (state, ids) => {
  state = { ...state }
  ids.forEach(id => delete state[id])
  return state
}

export default (state = {}, action) => {
  const { nodeId } = action

  //★★★ はじめの初期化のとき
  //type: "@@redux/INITa.v.f.d.s.g" なるアクションが送られてきて
  // nodeIdは undefined であるため、次の処理がないと、
  //stateのノード管理オブジェクトに undefinedプロパティにundefiendの値が
  // 登録されてしまう。
  if (typeof nodeId === 'undefined') {
    return state
  }
// DELETE_NODE はこっち
  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId)
    //stateから自身と下層のノードを一括削除
    return deleteMany(state, [nodeId, ...descendantIds])
  }
// CREATE_NODE, INCREMENT, ADD_CHILD, REMOVE_CHILD などはこっち
  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }

}
