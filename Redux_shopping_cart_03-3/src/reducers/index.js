import { combineReducers } from 'redux';
// この　products は、products.js の冒頭の　const products ではない。
// combineReducersの戻り値の、　export defaultされたリデューサ
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'


// カート内のproductsのidを取得
//ここで　stateやidと　cart.jsリデュース内のユーティリティと関連付け
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export default combineReducers({ products, cart });


export const getCartProducts = state => {
    return getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }));
}