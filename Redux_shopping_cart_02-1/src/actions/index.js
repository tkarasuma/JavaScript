import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

//引数一個を受ける関数を返す関数。　この引数には実行時、dispatchが割り当てられる。
export const getAllProducts = () => d => {
    // コールバックが引数。実行時、商品データの配列が入る。api/products.json
    shop.getProducts(
        products => d(
            {
                type: types.RECEIVE_PRODUCTS,
                products
            }
        )
    )
}