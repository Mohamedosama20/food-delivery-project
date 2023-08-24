import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../../../styles/shopping-cart.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-shopping/CartSlice'

const CartItem = ({item}) => {
  const{id, title, price, quantity, image01, totalPrice} = item;
  const dispatch = useDispatch()
  
  const removeItemHandler = () => { 
    dispatch(cartActions.removeItem(id))
  }
  const addItemHandler = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))}

    const deleteItem = () => {
      dispatch(cartActions.deleteItem(id))
    }

  return (
    <ListGroupItem className='border-0 item-cart'>
      <div className='cart-info d-flex gap-2'>
        <img src={image01} alt= 'product' />
        <div className='product-info gap-4 w-100 d-flex justify-content-between align-items-center'>
          <div>
            <h6 className='product-title'>{title}</h6>
            <p className='d-flex align-items-center gap-5 product-p'>{quantity}x <span>${totalPrice}</span></p>
            <div className='d-flex align-items-center justify-content-between cart-add'>
              <span className='btn-add' onClick={addItemHandler}><i class="ri-add-line"></i></span>
              <span className='btn-quant'>{quantity}</span>
              <span className='btn-remove' onClick={removeItemHandler}><i class="ri-subtract-line"></i></span>
            </div>
          </div>
          <span className='delete-btn' onClick={deleteItem}><i class="ri-close-line"></i></span>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default CartItem