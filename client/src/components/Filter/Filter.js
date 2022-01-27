import React from 'react';
import '../../css/Filter/Filter.css'

const Filter = () => {
  return (
  <div className='filter-wrapper'>
  <h2 className='filter-title'> Filter Comp </h2> 
  <div className='num-of-products'>Number of Products 4</div>
  <div className='filter-by-size'>
      <span>filter</span>
      <select className='filter-select'>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
      </select>
  </div>

  <div className='filter-by-size'>
      <span>Order</span>
      <select className='filter-select'>
          <option value="Latest">Latest</option>
          <option value="lower">Lower</option>
          <option value="highest">highest</option>
      </select>
  </div>
  
  </div>
  );
};

export default Filter;
