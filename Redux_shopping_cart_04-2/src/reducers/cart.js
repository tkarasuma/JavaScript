import {
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    CHECKOUT_SUCCESS,
    ADD_TO_CART
} from "../constants/ActionTypes";

// stateのプロパティ
const initialState = {
    addedIds: [],
    // idをプロパティとするオブジェクトで、数量管理
    quantityById: {}
}

// カートに追加されている商品のいｄの配列をかえす
const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            } else {
                return [
                    ...state,
                    action.productId
                ]
            }
        default:
            return state;
    }
}
//商品idをプロパティとする数量を値とするオブジェクト
const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action;
            return {
                ...state,
                [productId]: (state[action.productId] || 0) + 1
            }
        default:
            return state;
    }
}


//外部で利用するユーティリティ
export const getAddedIds = state => {
    return state.addedIds;
}
//外部で利用するユーティリティ
export const getQuantity = (state, productId) => {
    return state.quantityById[productId] || 0
}

//cartリデューサの実体
//内部で addedIds, quantityById リデューサをひとまとめにして利用している
const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return initialState;
        case CHECKOUT_FAILURE:
            console.log("決済に失敗しました。");
            return action.cart
        // ADD_TO_CARTはこちら
        case CHECKOUT_SUCCESS:
            console.log("決済が完了しました。");
            console.log("お支払い額:￥"+action.paid);
            return initialState;
        // ADD_TO_CARTはこちら
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
}

export default cart

