import React, { useEffect, useState } from 'react'
import products from '../assets/fake-data/products'
import ProductCard from "../components/UI/product-card/ProductCard";
import { cartActions } from '../store/cart-shopping/CartSlice';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import "../styles/product-details.css";
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredReview, setEnteredReview] = useState('')
  const {id} = useParams()
  const dispatch = useDispatch()
  const product = products.find(product => product.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const {title, price, category, desc, image01} = product
  const relatedProduct = products.filter(item => category === item.category);
  const addToCartHandler = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(enteredName, enteredEmail, enteredReview)
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])
  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])
  return (
    <Helmet title='Product-Details'>
      <CommonSection title={title}/>
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
           <div className='product-img-oneitem'>
           <div className='img-item mb-3' onClick={()=>setPreviewImg(product.image01)}>
           <img src={product.image01} alt='product' className='w-50'/>
           </div>
           <div className='img-item mb-2' onClick={()=>setPreviewImg(product.image02)}>
           <img src={product.image02} alt='product' className='w-50'/>
           </div>
           <div className='img-item' onClick={()=>setPreviewImg(product.image03)}>
           <img src={product.image03} alt='product' className='w-50'/>
           </div>
           </div>
            </Col>
            <Col lg='4' md='4'>
            <div className='product-img-main'>
           <img src={previewImg} alt='product' className='w-100'/>
           </div>
           </Col>
           <Col lg='6' md='6'>
           <div className='product-content-single'>
            <h2 className='product-name mb-3'>{title}</h2>
            <p className='product-price'>{" "}Price: <span>${price}</span></p>
            <p className='category mb-5'>Category: <span>{category}</span></p>
            <button className='addtocart-btn' onClick={addToCartHandler}>Add To Cart</button>
           </div>
            </Col>
            <Col lg='12'>
             <div className='tabs d-flex align-items-center gap-5 py-3'>
             <h6 className={`${tab==='desc' ? 'tab-active': ' '}`} onClick={()=> setTab('desc')}>Description</h6>
              <h6 className={`${tab==='rev' ? 'tab-active': ' '}`} onClick={()=> setTab('rev')}>Review</h6>
             </div>
             {
                tab === 'desc' ? (
                <div className='tab-content'>
                 <p>{desc}</p>
             </div> 
              ): (
             <div className='tab-form mb-3'>
             <div className='review-text pt-5'>
             <p className='user-name mb-0'>Mohamed Osama</p>
             <p className='user-email'>mohamedosama667@yahoo.com</p>
             <p className='user-review'>Nice Product</p>
             </div>
             <div className='review-text'>
             <p className='user-name mb-0'>Ahmed Ali</p>
             <p className='user-email'>mohamedosama667@yahoo.com</p>
             <p className='user-review'>Good Product</p>
             </div>
             <div className='review-text'>
             <p className='user-name mb-0'>Yara Ali</p>
             <p className='user-email'>mohamedosama667@yahoo.com</p>
             <p className='user-review'>Nice Burger</p>
             </div>
              <form className='form' onSubmit={submitHandler}>
              <div className='form-group'>
                <input type='text' placeholder='Enter Your Name' onChange={e=>setEnteredName(e.target.value)} required/>
              </div>
              <div className='form-group'>
                <input type='text' placeholder='Enter Your Email' onChange={e=>setEnteredEmail(e.target.value)} required/>
              </div>
              <div className='form-group'>
                <textarea rows={5} type='number' placeholder='Write your review' onChange={e=>setEnteredReview(e.target.value)} required/>
              </div>
              <button type="submit" className='addtocart-btn'>Submit</button>
              </form>
             </div>
             )}
            </Col>
            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related-text'>You Might Also Like</h2>
            </Col>
            {
              relatedProduct.map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' className="mb-4" key={item.id}>
                <ProductCard item = {item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails