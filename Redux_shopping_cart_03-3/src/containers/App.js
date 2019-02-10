import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer';

const App = () => (
  <div className="mx-auto" style={{width:"32em"}}>
    <h4 className="text-center alert alert-danger">🍓フルーツ市場🍈</h4>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
