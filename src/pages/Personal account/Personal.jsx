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
                                                <button>Загрузить фото</button>
                                          </div>

                                          <div className="info">
                                                <div className='item'>
                                                      <h5>ФИО</h5>
                                                      <p>{userData.name ? userData.name : 'Добавить'}</p>
                                                </div>

                                                <div className='item'>
                                                      <h5>Телефон</h5>
                                                      <p>{userData.phone ? userData.phone : 'Добавить'}</p>
                                                </div>

                                                <div className='item'>
                                                      <h5>Email</h5>
                                                      <p>{userData.email ? userData.email : 'Добавить'}</p>
                                                </div>

                                                <div className="item">
                                                      <h5>Основной способ доставки</h5>
                                                      <p>
                                                            {userData.deliveryMethod.city ? (
                                                                  <>
                                                                        <span>{userData.deliveryMethod.city}</span>{' '}
                                                                        <span>{userData.deliveryMethod.deliveryType}</span>{' '}
                                                                        <span>{userData.deliveryMethod.address}</span>
                                                                  </>
                                                            ) : (
                                                                  'Добавить'
                                                            )}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </section>
      )
}
