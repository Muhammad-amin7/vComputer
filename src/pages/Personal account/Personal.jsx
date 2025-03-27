import { Col, Container, Row } from 'react-bootstrap'
import './Personal.scss'
import { FaXRay } from 'react-icons/fa'
import userPhoto from "../../assets/img/userImg.svg"
import { userData } from '../../Constants/UserData'

export default function Personal() {
      return (
            <section className='personal'>
                  <Container >
                        <Row>
                              <Col xs={3}>
                                    <ul>
                                          <li><FaXRay />История заказов</li>
                                          <li><FaXRay />Избранное</li>
                                          <li><FaXRay />Просмотренные товары</li>
                                          <li><FaXRay />Мои отзывы</li>
                                          <li className='active'><FaXRay />Личные данные</li>
                                    </ul>
                              </Col>

                              <Col xs={9} >
                                    <h1>Личные данные</h1>
                                    <div className="user" >
                                          <div className="image">
                                                <img src={userData.image ? userData.image : userPhoto} alt="" />
                                          </div>

                                          <div className="info">

                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </section>
      )
}
