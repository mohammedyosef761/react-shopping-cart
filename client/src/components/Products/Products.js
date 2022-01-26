import React from 'react';
import "../../css/Products/Products.css"
const Products = (props) => {
    console.log(props);
  return (
    <div className="products-wrapper">
    {props.products.map(products=>(
        <div className='products-item' key={products.id} >
                    <img src={products.imageUrl} alt={products.title}/>
                    <div className='product-desc'>
                       <p>{products.title}</p>
                       <span>{products.price}</span>
               </div>
               <button>Add to Cart</button>
        </div>
    ))}
     
    </div>

  );
};

export default Products;
