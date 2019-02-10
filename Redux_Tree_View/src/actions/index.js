export const INCREMENT = 'INCREMENT'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'

export const increment = (nodeId) => ({
  type: INCREMENT,
  nodeId
})

let nextId = 0

//ユーザによって新規ノードの追加
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: `new_${nextId++}`
})
// id指定でノード削除　その子ノードも孫ノードなども下層は再帰的に削除
export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
})
// nodeIdの親のchildIdsの配列にchildIdを追加
export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
})
// 子ノード削除 nodeIdの親のchildIdsから childeIdを削除
export const removeChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
})
