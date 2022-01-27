import "./App.css";

import React , {useState,useEffect } from 'react';
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
// import {words} from './words';
import data from './data.json';
import Products from "./components/Products/Products";
import Filter from './components/Filter/Filter.js';
import Cart from './components/Cart/Cart.js';

function App() {
const [products,setProducts] = useState(data);
const [sort,setSort] = useState("");
const [size,setSize] = useState("");
const [cartItems , setCartItems]  = useState(JSON.parse(localStorage.getItem('cartItems'))||[]);

const handleFilterBySize = (e)=>{
      setSize(e.target.value);
      if(e.target.value ==="ALL"){
            setProducts(data);
            console.log(products);
      }
      else{
      let ProductsClone = [...products];
      let newProducts = ProductsClone.filter(p=>p.sizes.indexOf(e.target.value) !== -1);
      setProducts(newProducts);
      }
}

const handeleFilterByOrder = (e)=>{
  let order = e.target.value;
  setSort(order);
  let productsClone = [...products];
  let newProducts   = productsClone.sort(function(a,b){
    if(order === "lowest"){
      return a.price - b.price
    }
    else if(order==="highest"){
        return b.price - a.price 
    }
    else{
      return a.id < b.id ? 1 : -1 
    }
  });
  setProducts(newProducts);
}



const addToCart = (product)=>{
   const cartItemsClone = [...cartItems];
   let isProductExist =false;

   cartItemsClone.forEach(p=>{
     if(p.id === product.id){
       p.qty++;
       isProductExist = true;       
     }
   })
   if(!isProductExist){
        cartItemsClone.push({...product,qty:1});
   }
   setCartItems(cartItemsClone);
}


const removeFromCart = (product)=>{
  const cartItemsClone = [...cartItems];
  setCartItems(cartItemsClone.filter(p=> p.id !== product.id));
}
useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(cartItems));
}

,[cartItems])


  return (
    <div className="layout">
   <Header />
      <main>
       <div className="wrapper">
       <Products products={products} addToCart={addToCart}/>
       <Filter  
       productNumber ={products.length}
       size={size}
       sort={sort}
       handleFilterBySize={handleFilterBySize}
       handeleFilterByOrder={ handeleFilterByOrder}
       />
       </div>
       <Cart cartItems={cartItems}
         removeFromCart={removeFromCart}
       />
      </main>
    <Footer />
    </div>
  );
}

export default App;
