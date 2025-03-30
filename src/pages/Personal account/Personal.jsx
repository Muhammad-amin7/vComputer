import { Col, Container, Row } from 'react-bootstrap'
import './Personal.scss'
import { FaXRay } from 'react-icons/fa'
import userPhoto from "../../assets/img/userImg.svg"
import { userData } from '../../Constants/UserData'
import { FiEdit2 } from "react-icons/fi";
import ModalChangeInfo from './ModalChangeInfo'
import { useState } from 'react'

export default function Personal() {
      const [isChange, setIsChange] = useState(false)
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
                                                {Object.keys(userData).map((element, index) => {
                                                      const key = userData[element].title;
                                                      const value = userData[element].value;
                                                      isChange && <ModalChangeInfo title={key} val={value} />

                                                      return <div className="item" key={index}>
                                                            {((typeof value === 'string' || value === null)) ?
                                                                  // email , number , name
                                                                  (key ? <>
                                                                        <h5>{key}</h5>
                                                                        <p>
                                                                              {value ? value : "Добавить"}

                                                                              <button onClick={() => setIsChange(true)}>
                                                                                    <FiEdit2 />
                                                                              </button>
                                                                        </p>
                                                                  </> : null)
                                                                  // address
                                                                  : <>
                                                                        {key ? <>
                                                                              <h5>{key}</h5>

                                                                              <p>
                                                                                    <div >
                                                                                          {value?.map((item, id) => {
                                                                                                return <span key={id}>
                                                                                                      {Object.values(item)}
                                                                                                </span>
                                                                                          })}
                                                                                    </div>

                                                                                    <button>
                                                                                          <FiEdit2 />
                                                                                    </button>
                                                                              </p>
                                                                        </> : null}
                                                                  </>

                                                            }
                                                      </div>
                                                })}
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </section>
      )
}
