import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

//個々の商品データを入れる入れ物
// カートに入れるためのボタンもつける
const ProductItem = ({product,onAddToCartClicked})=>(
    <div className="clearfix p-1 rounded mx-auto" style={{ marginBottom: 5, width: '30em', border:'5px solid #eee'}} >
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <hr />
    <button className="btn btn-warning float-right"
    onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'カートに入れる' : '売り切れです'}
    </button>
  </div>   
)


ProductItem.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked:PropTypes.func.isRequired
  }
  
  export default ProductItem