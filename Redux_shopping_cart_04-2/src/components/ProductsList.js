import React from 'react'
import PropTypes from 'prop-types'


const ProductsList = ({ title, children,onClick_displayState }) => (
  <div  className="mx-auto">
    <h5 className="text-center">{title}</h5>
    <div>{children}</div>
    <button className="btn btn-primary mx-auto d-block mb-1" style={{width:"6em"}} onClick={onClick_displayState}>state 表示</button>
 </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  onClick_displayState:PropTypes.func.isRequired
}

export default ProductsList
