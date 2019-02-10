import React from 'react'
import PropTypes from 'prop-types'

//個々の商品情報の表示部分
const Product = ({ price, quantity, title }) => (
    <div className="clearfix mb-1">
        <span className="p-1  bg-success text-white rounded m1 float-left">{title}</span><span className="w-50 float-right"><span className="float-right w-25 text-right">{quantity ? `  ${quantity}個` : `0個`}</span><span className="float-right w-25 mr-3">&#165;{price}</span></span>
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
  }
  
  export default Product