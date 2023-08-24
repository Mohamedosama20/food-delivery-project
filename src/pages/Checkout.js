import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import "../styles/checkout.css";
import { useSelector } from 'react-redux';
const Checkout = () => {
  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPhone, setEnterPhone] = useState('')
  const [enterCountry, setEnterCountry] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const [enterPostalCode, setEnterPostalCode] = useState('')
  const shippingInfo = [];
const cartTotalAmout = useSelector(state => state.cart.totalAmount)
const shippingCost = 30;
const totalAmount = cartTotalAmout + shippingCost;
const submitHandler = (e) => {
  e.preventDefault();
  const userShippingAddress = {
    name: enterName,
    email: enterEmail,
    phone: enterPhone,
    country: enterCountry,
    city: enterCity,
    postalCode: enterPostalCode,
  };
  shippingInfo.push(userShippingAddress);
  console.log(shippingInfo);
}
  return (
    <Helmet title=" Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md='6'>
              <h6 className="mb-4">Shipping Address</h6>
              <form className='form-checkout' onSubmit={submitHandler}>
              <div className='form-group'>
                <input type='text' placeholder='Enter Your Name' required onChange={(e) => setEnterName(e.target.value)}/>
              </div>
              <div className='form-group'>
                <input type='email' placeholder='Enter Your Email' required onChange={(e) => setEnterEmail(e.target.value)}/>
              </div>
              <div className='form-group'>
                <input type='number' placeholder='Phone Number' required onChange={(e) => setEnterPhone(e.target.value)}/>
              </div>
              <div className='form-group'>
                <input type='text' placeholder='Country' required onChange={(e) => setEnterCountry(e.target.value)}/>
              </div>
              <div className='form-group'>
                <input type='text' placeholder='City' required onChange={(e) => setEnterCity(e.target.value)}/>
              </div>
              <div className='form-group'>
                <input type='number' placeholder='Postal Code' required onChange={(e) => setEnterPostalCode(e.target.value)}/>
              </div>
              <button type='submit' className='addtocart-btn'>Payment</button>
              </form>
            </Col>
            <Col lg="4" md='6'>
            <div className='bill'>
              <h6 className='d-flex align-items-center mb-3 justify-content-between'>Subtotal: <span>${cartTotalAmout}</span></h6>
              <h6 className='d-flex align-items-center mb-3 justify-content-between'>Shipping: <span>${shippingCost}</span></h6>
              <div className='checkout-total'>
                <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout