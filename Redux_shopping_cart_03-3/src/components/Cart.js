import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products}) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>ご希望の商品をカートに追加してください</em>
  )

  return (
    <div className="border border-dark alert alert-secondary rounded p-1 clearfix mx-auto" style={{width:'30em'}}>
      <h5 className="mb-1 text-center">&#x1f6d2;ショッピングカート</h5>
      <div>{nodes}</div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array
}

export default Cart