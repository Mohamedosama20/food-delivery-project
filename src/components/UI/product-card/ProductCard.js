import React from 'react';
import { Link } from 'react-router-dom';
import  '../../../styles/product-card.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../../store/cart-shopping/CartSlice';

const ProductCard = (props) => {
    const {id, title, image01, price} = props.item
    const dispatch = useDispatch()

    const addToCart =() => {
        dispatch(cartActions.addItem({
          id,
          title,
          image01,
          price
        }))
      }
  return (
    <div className='product-item'>
    <div className='product-img'>
        <img src={image01} alt='product' className='w-50' />
    </div>
    <div className='product-info'>
        <h5><Link style={{ textDecoration: 'none' }} to={`/foods/${id}`}>{title}</Link></h5>
        <div className='d-flex justify-content-between align-items-center'>
            <span className='product-price'>${price}</span>
            <button className='addtocart-btn' onClick={addToCart}>Add To Cart</button>
        </div>
    </div>
    </div>
  )
}


export default ProductCard