import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import "../styles/cart-page.css";
import {  cartActions } from '../store/cart-shopping/CartSlice'
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title=" Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
             {cartItems.length === 0 ?
             <h5 className="text-center">Your Cart is Empty</h5>
             :
             <table className='table table-hover table-bordered'>
                <thead>
                <tr>
                  <th className='text-center'>Image</th>
                  <th className='text-center'>Title</th>
                  <th className='text-center'>Price</th>
                  <th className='text-center'>Quantity</th>
                  <th className='text-center'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartItems.map((item) => <Tr key={item} item={item} />)
                }
                </tbody>
              </table>
              }
              <div className='mt-4'>
              <h6>Subtotal: <span className='total-price'>${totalAmount}</span></h6>
              <p>Taxes and Shipping will be calculate at Checkout</p>
              <div className='cart-buttons'>
                <button className="addtocart-btn me-4">
                <Link to ='/foods' style={{ textDecoration: 'none', color: 'white' }}>
                Continue Shopping</Link></button>
                <button className="addtocart-btn">
                <Link to ='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
                Proceed To Checkout</Link></button>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {
  const {image01, title, price, quantity, id} = props.item
  const dispatch = useDispatch()
 const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
  <tr>
                  <td className='img-box'>
                  <img src={image01} alt='product'/>
                  </td>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{quantity}</td>
                  <td className='cart-del' onClick={deleteItem}> <i class="ri-delete-bin-line"></i></td>
                  </tr>
  )
}

export default Cart