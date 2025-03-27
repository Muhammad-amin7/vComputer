import { Col, Container, Row } from 'react-bootstrap'
import { productData } from '../../Constants/ProductData'
import ProductItem from '../ProductItem/ProductItem'
import './ProductsList.scss'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

export default function ProductsList() {
      const [allProducts, setAllProducts] = useState(false)
      return (
            <div className='productsList'>
                  <Container>
                        <Row>
                              <Col xs={12}>
                                    <h1 className="title">Топ продаж</h1>
                              </Col>
                              <Row className='d-flex flex-nowrap overflow-x-auto'>
                                    {productData.slice(0, 6).map((item, index) => {
                                          return <Col xl={2} lg={3} md={4} xs={6} key={index}><ProductItem product={[item]} /></Col>
                                    })}
                              </Row>

                              <Col xs={12}>
                                    <button className='btnAllProducts' onClick={() => setAllProducts(prev => !prev)}>Смотреть все товары <FaArrowRight /></button>
                              </Col>

                              {allProducts ? [...productData].slice(0, 6).reverse().map((item, index) => {
                                    return <Col xl={2} lg={3} md={4} xs={6} key={index}><ProductItem product={[item]} /></Col>
                              }) : null}
                        </Row>
                  </Container>
            </div>
      )
}

