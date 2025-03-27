import { Col, Container, Row } from 'react-bootstrap'
import './GameZone.scss'
import ProductItem from '../ProductItem/ProductItem'
import { productData } from '../../Constants/ProductData'
import img6 from "../../assets/img/gaming (6).png"
import img1 from "../../assets/img/gaming (1).png"
import img2 from "../../assets/img/gaming (2).png"
import img3 from "../../assets/img/gaming (3).png"
import img4 from "../../assets/img/gaming (4).png"
import img5 from "../../assets/img/gaming (5).png"
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
export default function GameZone() {
      const [showItems, setShowItems] = useState(6)
      useEffect(() => {
            const updateItems = () => {
                  if (window.innerWidth <= 991) {
                        setShowItems(3);
                  } else if (window.innerWidth <= 1199) {
                        setShowItems(4);
                  } else {
                        setShowItems(6);
                  }
            };

            updateItems();
            window.addEventListener("resize", updateItems);

            return () => {
                  window.removeEventListener("resize", updateItems);
            };
      }, []);

      var settings = {
            dots: false,
            infinite: true,
            nav: false,
            speed: 1500,
            slidesToShow: showItems,
            slidesToScroll: 2,
      };

      const gamingCategory = [
            { id: 0, name: "Клавиатуры", image: img1 },
            { id: 1, name: "Мыши", image: img2 },
            { id: 2, name: "Аксессуары", image: img3 },
            { id: 3, name: "Игровые ноутбуки", image: img4 },
            { id: 4, name: "Видеокарты", image: img5 },
            { id: 5, name: "Мониторы", image: img6 },
      ]
      return (
            <div className='gameZone'>
                  <Container >
                        <Row >
                              <Col xs={12}>
                                    <h1>Game Zone</h1>
                              </Col>
                              <Row >
                                    {productData.slice(0, showItems).map((item, index) => {
                                          return <Col key={index} xl={2} lg={3} md={4} xs={6}>
                                                <ProductItem product={[item]} />
                                          </Col>
                                    })}
                              </Row>
                        </Row>

                        <Row className='justify-content-center'>
                              <Col xs={12} >
                                    <h2>Категории для геймеров</h2>
                              </Col>


                              <Row>
                                    <Slider {...settings}>
                                          {gamingCategory.map(({ id, name, image }) => {
                                                return <Col key={id} xl={2} lg={2} md={4} xs={6}>
                                                      <div className="game">
                                                            <img src={image} alt="" />
                                                            <p>{name}</p>
                                                      </div>
                                                </Col>
                                          })}
                                    </Slider>
                              </Row>
                        </Row>
                  </Container>
            </div>
      )
}
