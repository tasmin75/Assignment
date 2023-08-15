import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCartContext } from '../../context/CartContext';
import style from './Shopping.module.css'

const ProductList = () => {
  const { dispatch } = useCartContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className={style.container}>
      <h2>Products</h2>
      <ul className={style.list}>
        {products.map(product => (
          <li key={product.id}>
          <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
