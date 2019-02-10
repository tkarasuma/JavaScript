import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = ()=>(
    <div className="d-flex p-2 justify-content-around">
    <FilterLink filter="SHOW_ALL">
      全件
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      進行中
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      完了
    </FilterLink>
    </div>
)

export default Footer;