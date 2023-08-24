import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
        <Col lg='3' md='4' sm='6'>
        <div className='footer__logo text-start'>
                <img src={logo} alt='logo' />
                <h5>Tasty Treat</h5>
                <p>On Tasty Treat & Eats you'll find easy, delicious desserts that you can enjoy in no time!
                </p>
              </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Delivery Time</h5>
        <ListGroup className='delivery__time-list'>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
          <span>Sunday - Thursday</span>
          <p>10.00am - 11.00pm</p>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
          <span>Friday - Saturday</span>
          <p>Off day</p>
          </ListGroupItem>
        </ListGroup>
</Col>
  <Col lg='3' md='4' sm='6'>
  <h5 className='footer__title'>Contact</h5>
        <ListGroup className='delivery__time-list'>
        <ListGroupItem className='delivery__time-item border-0 ps-0'>
          <p>Location: Cairo, Egypt</p>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
          <span>Phone: +20 111 8788 751</span>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
          <span>Email: mohamedosama667@yahoo.com</span>
          </ListGroupItem>
        </ListGroup>
</Col>
  <Col lg='3' md='4' sm='6'>
  <h5 className='footer__title'>Newsletter</h5>
  <p>Subsrcibe Our Newsletter</p>
  <div className='newsletter'>
  <input type='email' placeholder='Enter your email' />
  <span><i class="ri-send-plane-line"></i></span>
  </div>
</Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
          <p className='copyright'>Copyright - 2023, By Mohamed Osama. All Rights Reserved. </p>
          </Col>
          <Col lg='6' md='6'>
          <div className='footer__social d-flex align-items-center gap-4 justify-content-end'>
            <p className='m-0'>Follow: </p>
            <span>{" "}<Link style={{ textDecoration: 'none' }} to='https://www.facebook.com/Muhammmeedd/'><i class="ri-facebook-line"></i></Link>{" "}</span>
            <span><Link style={{ textDecoration: 'none' }} to='https://github.com/Mohamedosama20/'><i class="ri-github-line"></i></Link></span>
            <span>{" "}<Link style={{ textDecoration: 'none' }} to='https://linkedin.com/in/mohamed-osama-4183b01b2'><i class="ri-linkedin-line"></i></Link>{" "}</span>
            <span><Link style={{ textDecoration: 'none' }} to='https://wa.me/+201118788751'><i class="ri-whatsapp-line"></i></Link></span>

          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer