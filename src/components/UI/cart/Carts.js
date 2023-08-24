import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import '../../../styles/shopping-cart.css'
import { useSelector, useDispatch } from 'react-redux'
import {CartUiActions} from '../../../store/cart-shopping/CartUiSlice'

const Carts = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const toggleCart = () => {
    dispatch(CartUiActions.toggle())
  }
  return (
    <div className='container-cart'>
    <ListGroup className='cart-product'>
    <div className='cart-close'>
    <span onClick={toggleCart}><i class="ri-close-fill"></i></span>
    </div>
    <div className='cart-list'>
    {
      // eslint-disable-next-line eqeqeq
      cartProducts == 0 ? <h6 className='text-center mt-5'>Cart is empty</h6> 
      : cartProducts.map((item, index) => (
        <CartItem key={index} item={item}/>
      )) 
    }
    </div>
    <div className='cart-bottom d-flex align-items-center justify-content-between'>
      <h6>Subtotal: <span>${totalAmount}</span></h6>
      <button><Link style={{ textDecoration: 'none', color:'black' }} to='/checkout'>Checkout</Link></button>
    </div>
    </ListGroup>
    </div>
  )
}

export default Carts