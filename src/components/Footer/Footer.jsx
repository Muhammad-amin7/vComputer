import { Col, Container, NavLink, Row } from "react-bootstrap";
import { navLinks, socialNetwork, telephoneNumbers } from "../../Constants/Data";
import './Footer.scss'
import { FiSend } from "react-icons/fi";
import logo from "../../assets/img/Logo white.png"
import pay from "../../assets/img/pays.svg"

export default function Footer() {
  return (
    <footer>
      <Container >
        <Row className=" justify-content-center">
          <Col lg={2} md={6}>
            <ul>
              <span>Информация</span>
              {navLinks.map(({ id, linkName, slug }) => {
                return <li key={id}><NavLink to={slug}>{linkName}</NavLink></li>
              })}
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <ul>
              <span>Услуги и сервисы</span>
              {navLinks.map(({ id, linkName, slug }) => {
                return <li key={id}><NavLink to={slug}>{linkName}</NavLink></li>
              })}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <ul>
              <span>Контакты</span>
              {telephoneNumbers.map(({ id, number }) => {
                return <li key={id}>{number} - Отдел продаж</li>
              })}

              <li>Днепр Европейская, 8 (бывшая Миронова 8)</li>
              <li>Понедельник-Пятница 9:00-19:00 <br />
                Суббота-Воскресенье: с 9:00-16:00</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <ul>
              <span>Следите за нами</span>
              <li className="icons">
                {socialNetwork.map(({ id, link, icon }) => {
                  return <span key={id}><a href={link}>{icon}</a></span>
                })}
              </li>

              <form action="">
                <label htmlFor="FooterInp">Подписывайтесь на скидки</label>
                <div className="input">
                  <input type="text" id="FooterInp" placeholder="Укажите ваш email..." />
                  <button><FiSend /></button>
                </div>
              </form>
            </ul>
          </Col>

          <Col lg={10} >
            <div className="footerBottom">
              <div className="left">
                <NavLink to="/" >
                  <img src={logo} alt="" />
                </NavLink>
                <p>2008-2021 Интернет-магазин v-comp.com.ua
                  Все права защищены</p>
              </div>

              <img src={pay} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
