import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products}) => (
  <Cart
    products={products}
     />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired
}
const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default connect(mapStateToProps)(CartContainer)