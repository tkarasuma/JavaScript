export default function generateTree() {

  const NUM = 10;

  // treeオブジェクトをルートとなる　id 0　のオブジェクトで初期化
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  }

  for (let i = 1; i < NUM ; i++) {
    //i未満の整数をランダムに取り出し
    // 0以上1未満の乱数を二乗することで、上の方に表示されているノードを
    // 優先的に親ノードとしているか
    let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
    // id が　i のノード作成してtreeに追加
    tree[i] = {
      id: i,
      counter: 0,
      childIds: []
    }
    //idがparentIdの 子ノードに追加
    tree[parentId].childIds.push(i)
  }

  return tree
}
