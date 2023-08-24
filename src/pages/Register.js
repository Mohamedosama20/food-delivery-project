import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  const registerName = useRef()
  const registerPass = useRef()
  const registerMail = useRef()
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title=" Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md='6' sm='12' className='m-auto text-center'>
            <form className='form mb-5' onSubmit={submitHandler}>
              <div className='form-group'>
                <input type='text' placeholder='User Name' required ref={registerName}/>
              </div>
              <div className='form-group'>
                <input type='email' placeholder='Email' required ref={registerMail}/>
              </div>
              <div className='form-group'>
                <input type='password' placeholder='Password' required ref={registerPass}/>
              </div>
              <button type='submit' className='addtocart-btn'>Sign Up</button>
            </form>
            <Link style={{ textDecoration: 'none', color:'black' }} to='/login' >
            Already have an account?
            </Link>
            <div className='mt-3'>
            <Link style={{ textDecoration: 'none', color:'black' }} to='/login' >
            <button className='addtocart-btn'>Login</button>
            </Link>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register