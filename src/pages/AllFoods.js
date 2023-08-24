import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import "../styles/all-foods.css";
import ReactPaginate from 'react-paginate';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") 
    {return item}
      if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      {return item
      }else {
return console.log("not found");
}
    }) 

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;
  const displayPage = searchedProduct.slice(pagesVisited, pagesVisited + productsPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="All-Foods">
    <CommonSection title='All Foods' />
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' xs="12">
          <div className='search-box d-flex align-items-center justify-content-between'>
            <input type='text' placeholder='Search.....' value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}/>
            <span><i class="ri-search-line"></i></span>
          </div>
          </Col>
          <Col lg='6' md='6' sm='6' xs='12' className="mb-5">
            <div className='select-box text-end'>
            <select className="w-50">
                <option>Default</option>
                <option value='ascending'>Alphabetically, A-Z</option>
                <option value='descending'>Alphabetically, Z-A</option>
                <option value='high-price'>High Price</option>
                <option value='low-price'>Low Price</option>
              </select>
            </div>
          </Col>
          {displayPage.map((item) =>( 
            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4"> 
            {" "}
            <ProductCard item={item} />  
            </Col>
          ))}
          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Previous"}
              nextLabel={"Next"}
              containerClassName="paginationBtns"
            />
          </div>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default AllFoods