import { useContext, useEffect, useState } from 'react';
import './Navbar.scss'
import { Container, Row, Col } from "react-bootstrap";
import { FaBars, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaScaleBalanced, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/img/LOGO.png'
// import { BsBoxes } from "react-icons/bs";
import SearchProducts from '../SearchProducts/SearchProducts';
import TelephoneNumbers from '../TelephoneNumbers/TelephoneNumbers';
import LeftModal from '../LeftModal/LeftModal';
import { Context } from '../../Hooks/Context';
import LoginModal from '../LoginModal/LoginModal';
import CatalogProductModal from '../CatalogProductModal/CatalogProductModal';
import logoWhite from '../../assets/img/Logo white.png'
import Basket from '../Basket/Basket';
import { IoCart, IoCartOutline } from "react-icons/io5";
import Favorites from '../Favorites/Favorites';
import { PiArrowSquareOut } from "react-icons/pi";

export default function Navbar() {
      const [changeLang, setChangeLang] = useState('ru')
      const { toggleLeftModal, setToggleLeftModal, addedCart, favoriteProducts, passRegister } = useContext(Context)
      const [loginModalActive, setLoginModalActive] = useState(false)
      const [basketActive, setBasketActive] = useState(false)
      const [favoriteActive, setFavoriteActive] = useState(false)
      const [catalogModalActive, setCatalogModalActive] = useState(false)
      const [basketCount, setBasketCount] = useState(0)
      const [scrollYSize, setScrollSize] = useState(0)
      const navigate = useNavigate()
      const handleActiveScroll = () => {
            setScrollSize(window.scrollY)
      }
      useEffect(() => {
            window.addEventListener('scroll', handleActiveScroll)

            return () => {
                  window.removeEventListener('scroll', handleActiveScroll)
            }

      }, [scrollYSize])

      useEffect(() => {
            setBasketCount(0)
            addedCart.filter((item) => setBasketCount(prev => prev += item.count))
      }, [addedCart])

      const navLinks = [
            { id: 0, linkName: 'Акции', slug: '/sale' },
            { id: 1, linkName: 'Кредит', slug: '/credit' },
            { id: 2, linkName: 'Оплата и доставка', slug: '/payment' },
            { id: 3, linkName: 'Помощь', slug: '/help' },
            { id: 4, linkName: 'Скупка Б/У', slug: '/buyback' },
            { id: 5, linkName: 'Контакты', slug: '/contact' },
      ]

      return (
            <>
                  <nav >
                        {/* Nav top */}
                        {toggleLeftModal ? <LeftModal /> : null}
                        <div className="nav-top">
                              <Container >
                                    <Row className=" justify-content-between align-items-center">
                                          <Col xl={6} md={10} xs={2} className="d-flex align-items-center gap-5">
                                                <button className="btn-leftMenu">
                                                      <FaBars onClick={() => setToggleLeftModal(true)} />
                                                </button>

                                                <ul className='d-none d-md-flex'>
                                                      {navLinks.map(({ id, linkName, slug }) => {
                                                            return <li key={id}><Link to={slug} >{linkName}</Link></li>
                                                      })}
                                                </ul>
                                          </Col>

                                          <Col sm={4} xs={6} className='d-md-none d-block'>
                                                <Link to="/"><img src={logoWhite} alt="computer shop logo" /></Link>
                                          </Col>

                                          <Col md={2} xs={4} className="d-flex align-items-center justify-content-end gap-5">
                                                <div className="change-language d-none d-sm-flex">
                                                      <button onClick={() => setChangeLang('ru')} className={changeLang === 'ru' ? 'active' : null}>Ru</button>
                                                      /
                                                      <button onClick={() => setChangeLang('uz')}
                                                            className={changeLang === 'uz' ? 'active' : null}>Uz</button>
                                                </div>
                                                <div className='d-block d-sm-none'>
                                                      <TelephoneNumbers />
                                                </div>
                                                <button className='btn-login d-none d-sm-block' onClick={() => passRegister ? navigate("/personal/Personal_information") : setLoginModalActive(true)}>
                                                      <FaRegUser />
                                                </button>
                                          </Col>
                                    </Row>
                              </Container >
                        </div>

                        {/* Nav bottom */}
                        <div className="nav-bottom" style={{ top: scrollYSize < 20 ? "60px" : "0px" }} >
                              <Container >
                                    <Row className='align-items-center justify-content-between'>
                                          <Col lg='auto' md={2} className='d-none d-md-block' >
                                                <Link to="/"><img src={logo} alt="computer shop logo" /></Link>
                                          </Col>

                                          <Col lg='2' xs={7} md={2} sm={3} className=' d-flex justify-content-center'>
                                                <button
                                                      onClick={() => { setCatalogModalActive(prev => !prev); setScrollSize(60); }}
                                                      className='btn-CatalogModal'
                                                      style={{ background: catalogModalActive && "#E93232" }}>
                                                      {catalogModalActive ? "закрыть" : "КАТАЛОГ ТОВАРОВ"} {catalogModalActive ? <FaXmark /> : <PiArrowSquareOut />}
                                                </button>
                                          </Col>

                                          <Col sm={5} md={4} xs={1} className=''>
                                                <SearchProducts />
                                          </Col>

                                          <Col md='auto' className='d-none d-md-block'>
                                                <TelephoneNumbers />
                                          </Col>

                                          <Col sm='auto' xs={3}>
                                                <ul className="nav-icons ">
                                                      <li className='d-md-none d-sm-block d-none'><TelephoneNumbers /></li>
                                                      <li className='d-none d-sm-block'><FaScaleBalanced /></li>
                                                      <li className='d-none d-sm-block' onClick={() => setFavoriteActive(true)}>
                                                            {favoriteProducts.length == 0 ? <FaRegHeart /> : <FaHeart />}
                                                            {favoriteProducts.length !== 0 && <span className='count' style={{ background: "#E93232" }}>{favoriteProducts.length}</span>}
                                                      </li>
                                                      <li onClick={() => setBasketActive(true)}>
                                                            {basketCount !== 0 ? <IoCart /> : <IoCartOutline />}
                                                            {basketCount !== 0 && <span className='count' style={{ background: "#06A56C" }}>{basketCount}</span>}
                                                      </li>
                                                </ul>
                                          </Col>
                                    </Row>
                              </Container >
                        </div>
                  </nav >

                  {/* Modals */}
                  < LoginModal login={loginModalActive} setLogin={setLoginModalActive} />
                  <CatalogProductModal active={catalogModalActive} setActive={setCatalogModalActive} />
                  <Basket active={basketActive} setActive={setBasketActive} />
                  <Favorites active={favoriteActive} setActive={setFavoriteActive} />
            </>
      )
}