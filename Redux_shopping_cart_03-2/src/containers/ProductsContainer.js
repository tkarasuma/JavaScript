import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { displayState, addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'


// productsは商品データのオブジェクトの配列。　
// reducers/product//getVisibleProducts関数で取得
// displayStateは　stateの中身を覗ける関数。ボタンで使う。

const ProductsContainer = ({ products, displayState, addToCart }) => (
    <ProductsList title="商品一覧" onClick_displayState={() => displayState()}>
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}
            />
        )}
    </ProductsList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    displayState: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

// ここで ステートの商品情報のオブジェクトの配列を
// productsプロップスに結びつける。
const mapStateToProps = state => {
    return {
        products: getVisibleProducts(state.products)
    }
}

export default connect(
    mapStateToProps, { displayState, addToCart }
)(ProductsContainer)