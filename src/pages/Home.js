import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import  '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category';
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import products from '../assets/fake-data/products'
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard.js";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';


const featureData = [
  {
    title : 'Quick Delivery',
    description: 'Food is any substance consumed by an organism for nutritional support.',
    imgUrl : featureImg01,
  },
  {
    title : 'Super Dine In',
    description: 'Food is any substance consumed by an organism for nutritional support.',
    imgUrl : featureImg02,
  },
  {
    title : 'Easy Pick Up',
    description: 'Food is any substance consumed by an organism for nutritional support.',
    imgUrl : featureImg03,
  },
]
const Home = () => {
  const [category, setCategory] = useState('All')
  const [allProducts, setAllProducts] = useState(products)
  const [hotpizza, setHotpizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotpizza(slicePizza)
  }, [])

  useEffect(() => {
    if(category === 'ALL') {
      setAllProducts(products)
    } if(category === 'BURGER') {
      const filteredProducts = products.filter((item) => item.category === 'Burger')
    setAllProducts(filteredProducts)
    } if(category === 'PIZZA') {
      const filteredProducts = products.filter((item) => item.category === 'Pizza')
    setAllProducts(filteredProducts)
    } if(category === 'BREAD') {
      const filteredProducts = products.filter((item) => item.category === 'Bread')
    setAllProducts(filteredProducts)
    }  
     
  }, [category])
  return (
    <Helmet title=' Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="hero-contact">
          <h5 className='mb-3'>Easy Way To Make an Order </h5>
          <h1 className='mb-4 hero-title'><span>Hungry?</span>Just Wait Food At<span> Your Door</span></h1>
          <p>Order food from favourite restaurants near you. By Tasty Treat ©️ 2023</p>
          <div className="hero-btn d-flex align-items-center gap-5 mt-5">
            <button className='order-btn align-items-center justify-content-between d-flex'>Order Now 
            <i class="ri-arrow-right-s-line"></i></button>
            <button className='all-foods-btn'><Link style={{ textDecoration: 'none' }} to='/foods'>See All Foods</Link></button>
          </div>
          <div className='hero-service d-flex align-items-center gap-5 mt-5'>
          <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i class='ri-car-line'></i></span>{" "}No Shipping Charge</p>
          <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i class='ri-shield-check-line'></i></span>{" "}100% Secure Checkout</p>

          </div>
          </div>
          </Col>
          <Col lg='6' md='6'>
          <div className="hero-img">
            <img src={heroImg} alt='hero' className='w-100'/>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Category/>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h5 className='feature-subtitle mb-4'>What We Serve</h5>
            <h2 className='feature-title'>Just Sit Back At Home</h2>
            <h2 className='feature-title'>We Will <span>Take Care</span></h2>
            <p className='mb-1 mt-4 feature-text'>Food is any substance consumed by an organism for nutritional support.</p>
          <p className='feature-text'>Food is usually of plant, or fungal origin and contains essential nutrients{" "}</p>
          </Col>
         {
            featureData.map((item, index) => (
              <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
          <div className="feature-item text-center px-5 py-3">
          <img src={item.imgUrl} alt='feature' className='w-25 mb-3'/>
          <h5 className='fw-bold mb-3'>{item.title}</h5>
          <p>{item.description}</p>
          </div>
          </Col>
            ))
         }
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h2 className='text-center'>Popular Foods</h2>
          </Col>
          <Col lg='12'>
         <div className="food-category d-flex justify-content-center align-items-center gap-4">
          <button className={`btn-all ${category==='ALL' ? 'btnActive' : ''}`} onClick={()=> setCategory('ALL')}>All</button>
          <button className={`d-flex align-items-center gap-2 ${category==='BURGER' ? 'btnActive' : ''}`} onClick={()=> setCategory('BURGER')}><img src={foodCategoryImg01} alt='burger'/>Burger</button>
          <button className={`d-flex align-items-center gap-2 ${category==='PIZZA' ? 'btnActive' : ''}`} onClick={()=> setCategory('PIZZA')}><img src={foodCategoryImg02} alt='pizza'/>Pizza</button>
          <button className={`d-flex align-items-center gap-2 ${category==='BREAD' ? 'btnActive' : ''}`} onClick={()=> setCategory('BREAD')}><img src={foodCategoryImg03} alt='bread'/>Bread</button>

         </div>
          </Col>
          {
            allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
              <ProductCard item={item}/>
              </Col>
            ))
          }
         
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <img src={whyImg} alt='why' className='w-100'/>

          </Col>
          <Col lg='6' md='6'>
            <div className="why-us">
              <h2 className='why-title mb-4'>Why <span>Tasty Treat?</span></h2>
              <p className='tasty-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
            <ListGroup className='mt-5'>
              <ListGroupItem className='border-0 ps-0'>
              <p className='choose-icon d-flex gap-2 align-items-center'> <i class="ri-checkbox-circle-line"></i>
              Fresh And Tasty Foods </p>
              <p className='choose-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0'>
              <p className='choose-icon d-flex gap-2 align-items-center'><i class="ri-checkbox-circle-line"></i>
              Quality Support </p>
              <p className='choose-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0'>
              <p className='choose-icon d-flex gap-2 align-items-center'> <i class="ri-checkbox-circle-line"></i>
              Order From Any Location {" "} </p>
              <p className='choose-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2>Hot Pizza</h2>
          </Col>
          {
            hotpizza.map((item) => (
              <Col lg='3' md='4' key={item.id} className='mt-5'>
              <ProductCard item={item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
        <Col lg='6' md='6'>
          <div className='testimonial'>
          <h5 className='testimonial-title mb-4'>Testimonial</h5>
          <h2 className='testimonial-subtitle mb-4'>What Our <span>Customers</span> are Saying </h2>
          <p className='testimonial-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
          <TestimonialSlider/>
          </div>
          </Col>
          <Col lg='6' md='6'>
          <img src={networkImg} alt='network' className='w-100'/>
          </Col> 
         
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Home