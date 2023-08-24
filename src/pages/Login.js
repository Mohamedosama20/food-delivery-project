import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
const Login = () => {
  const loginName = useRef()
  const loginPassword = useRef()
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title=" Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md='6' sm='12' className='m-auto text-center'>
            <form className='form mb-5' onSubmit={submitHandler}>
              <div className='form-group'>
                <input type='text' placeholder='User Name' required ref={loginName}/>
              </div>
              <div className='form-group'>
                <input type='password' placeholder='Password' required ref={loginPassword}/>
              </div>
              <button type='submit' className='addtocart-btn'>Login</button>
            </form>
            <Link style={{ textDecoration: 'none', color:'black' }} to='/register' >
            Don't have an account? Create an account
            </Link>
            <div className='mt-3'>
            <Link style={{ textDecoration: 'none', color:'black' }} to='/register' >
            <button className='addtocart-btn'>Register</button>
            </Link>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login