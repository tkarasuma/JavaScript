import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

//stateは特定の商品のオブジェクトを想定
// ADD_TO_CARTのときは、引数のオブジェクトのinventoryプロパティの値を
//  1 減じたオブジェクトにして返す。
const products = (state, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }

        default:
            return state;
    }

}



// stateはbyId
const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce(
                    (obj, product) => {
                        obj[product.id] = product;
                        return obj;
                    }
                    , {}
                )
            }
        // ADD_TO_CARTはこちら
        default:
            const { productId } = action;
            return {
                ...state,
                [productId]: products(state[productId], action)
            }
    }
}
// stateはvisibleIds
const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id);
        default:
            return state
    }
}

export default combineReducers({ byId, visibleIds })

//idでstateから特定の商品オブジェクトを取得
export const getProduct = (state, id) => {
    return state.byId[id]
}
//商品idの配列から、商品オブジェクトの配列取得
export const getVisibleProducts = state => {
    return state.visibleIds.map(id => getProduct(state, id))
}