import React from 'react';
import '../../css/Filter/Filter.css';
import Flip from 'react-reveal/Flip';


const Filter = (props) => {
  return (
 <Flip>
 <div className='filter-wrapper'>
  <h2 className='filter-title'> Filter Comp </h2> 
  <div className='num-of-products'>Number of Products {props.productNumber}</div>
  <div className='filter-by-size'>
      <span>Filter</span>
      <select value={props.size} className='filter-select'  onChange={props.handleFilterBySize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
      </select>
  </div>

  <div className='filter-by-size' >
      <span>Order</span>
      <select value={props.sort} className='filter-select' onChange={ props.handeleFilterByOrder}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">highest</option>
      </select>
  </div>
  
  </div>

 </Flip>
  );
};

export default Filter;
