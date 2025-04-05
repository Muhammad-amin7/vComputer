import { Col, Container, Row } from 'react-bootstrap'
import './NewsHome.scss'
import { newsData } from '../../Constants/Data'
import { FaArrowRight } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../../Hooks/Context';


export default function NewsHome() {
      const { language } = useContext(Context)
      return (
            <div className='newsHome'>
                  <Container>
                        <Row>
                              <Col lg={12}>
                                    <h1 className="title">
                                          {language === "uz" ? "Yangiliklar" : "Новости"}
                                    </h1>
                              </Col>

                              {newsData.map(({ id, image, title_ru, title_uz, text_ru, text_uz, date }) => {
                                    return <Col lg={3} md={6} key={id} >
                                          <div className="newsItem">
                                                <img src={image} alt="" />
                                                <h3>{language === 'ru' ? title_ru : title_uz}</h3>
                                                <p className="text">{language === "uz" ? text_uz : text_ru}</p>
                                                <div className="bottom">
                                                      <p className="date">{date}</p>
                                                      <button>Читать полностью <FaArrowRight /></button>
                                                </div>
                                          </div>
                                    </Col>
                              })}
                        </Row>
                  </Container>
            </div>
      )
}
