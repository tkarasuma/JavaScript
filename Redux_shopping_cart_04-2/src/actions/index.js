import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import {getTotal} from '../reducers'

//引数1個を受ける関数を返す関数。　この引数には実行時、dispatchが割り当てられる。
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
//引数2個を受ける関数を返す関数。
// この引数には実行時、dとgにはdispatchとgetStateが割り当てられる。
export const displayState = () => (d, g) => {
    console.log(g());
}
//実行時、dとgにはdispatchとgetStateが割り当てられる。
//g すなわち getState() は　state tree を返す。
export const addToCart = (productId) => (d, g) => {
    if (g().products.byId[productId].inventory > 0) {
        d({
            type: types.ADD_TO_CART,
            productId
        })
    }
}
//実行時、dとgにはdispatchとgetStateが割り当てられる。
//g すなわち getState() は　state tree を返す。
export const checkout = products => (d, g) => {
// stateからstate.cartだけ取り出し
    const { cart } = g();
    const paid = getTotal(g()) 
    d({
        type: types.CHECKOUT_REQUEST
    });

    shop.buyProducts(
        products,
        //とりあえずここでは、無条件に成功するようにしておく。
        //このコールバック関数は、サーバー側の決済処理が成功すれば、成功のdispatch
        // 失敗すれば失敗のdispatchをする関数にするべきだろう
        () => {
            d({
                type: types.CHECKOUT_SUCCESS,
                paid,
                cart
            })
        }
        // () => {
        //     dispatch({
        //         type: types.CHECKOUT_FAILURE,
        //         cart
        //     })
        // }
    )
}
