import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                // 配列をidをプロパティにするオブジェクトに加工
                //スプレッド演算子で要素を展開
                ...action.products.reduce(
                    (obj, product) => {
                        obj[product.id] = product;
                        return obj;
                    }, {}
                )
            }
        default:
            return state;
    }
}

const visibleIds = (state=[],action)=>{
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id);
        default:
            return state
    }
}

export default combineReducers({byId,visibleIds})

//idでstateから特定の商品オブジェクトを取得
export const getProduct = (state,id)=>{
    return state.byId[id]
}
//商品idの配列から、商品オブジェクトの配列取得
export const getVisibleProducts = state =>{
    return state.visibleIds.map(id=> getProduct(state,id) )
}