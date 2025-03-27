import { Col, Container, Row } from 'react-bootstrap'
import './Header.scss'
import { CatalogName, headerIcons, headerSlider } from '../../Constants/Data'
import { FaChevronRight } from "react-icons/fa6";
import Slider from 'react-slick';

export default function Header() {
      var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
      };
      return (
            <header>
                  <Container>
                        <Row>
                              <Col lg={4} className='d-none d-lg-block'>
                                    <ul className='catalogs'>
                                          {CatalogName.map(({ id, name, icon }) => (
                                                <li key={id}>
                                                      <img src={icon} alt="" />
                                                      <span>{name}</span>
                                                      <FaChevronRight />
                                                </li>
                                          ))}
                                    </ul>
                              </Col>

                              <Col lg={8}>
                                    <Slider {...settings}>
                                          {headerSlider.map(({ text, title, id, image }) => (
                                                <div className='slider' key={id}>
                                                      <img src={image} alt="" />
                                                      <h1>{title}</h1>
                                                      <p>{text}</p>
                                                      <button>Banner button</button>
                                                </div>
                                          ))}
                                    </Slider>

                                    <div className="smallIcons">
                                          {headerIcons.map(({ id, image, text }) => (
                                                <div key={id}>
                                                      <img src={image} alt="" />
                                                      <span>{text}</span>
                                                </div>
                                          ))}
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </header>
      )
}
