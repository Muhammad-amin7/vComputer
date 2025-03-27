import { Link } from 'react-router-dom'
import './LeftModal.scss'
import logo from '../../assets/img/Logo white.png'
import { FaChevronDown, FaChevronUp, FaXmark } from 'react-icons/fa6'
import { navLinks, socialNetwork, telephoneNumbers } from '../../Constants/Data'
import { useContext, useState } from 'react'
import { Context } from '../../Hooks/Context'
import LoginModal from '../LoginModal/LoginModal'
import ModalBG from '../ModalsBG/ModalBG'

export default function LeftModal() {

      const [slideToggle, setSlideToggle] = useState(false)
      const { setToggleLeftModal, toggleLeftModal } = useContext(Context)
      const [loginModal, setLoginModal] = useState(false)

      if (toggleLeftModal) {
            document.querySelector('body').style.overflow = "hidden"
      } else {
            document.querySelector('body').style.overflow = "auto"
      }

      return (
            <>
                  <ModalBG />
                  <aside className='leftModal'>
                        <div className="modal_header">
                              <Link to='/' ><img src={logo} alt="ComputerShopLogo" /></Link>
                              <FaXmark onClick={() => setToggleLeftModal(false)} />
                        </div>
                        <div className="modal_body">
                              <div className="login">
                                    <h5 onClick={() => setLoginModal(true)}>Вход | Регистрация</h5>
                                    <LoginModal login={loginModal} setLogin={setLoginModal} />
                              </div>

                              <div className="slideToggle">
                                    <div className="toggleTop" onClick={() => setSlideToggle(prev => !prev)}>
                                          <h5>Информация</h5>
                                          {slideToggle ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>

                                    <ul style={{ display: slideToggle ? 'block' : 'none' }}>
                                          {navLinks.map(({ id, linkName, slug }) => {
                                                return <li key={id}><Link to={slug}>{linkName}</Link></li>
                                          })}
                                    </ul>
                              </div>

                              <div className='contact'>
                                    <h5>Контакты</h5>
                                    {telephoneNumbers.map(({ id, number }) => {
                                          return <a key={id} href={'tel:' + number}>{number} (067) - Отдел продаж</a>
                                    })}
                                    <p>Днепр <br />
                                          Европейская, 8 (бывшая Миронова 8)</p>
                                    <p>
                                          Понедельник-Пятница 9:00-19:00 <br />
                                          Суббота-Воскресенье: с 9:00-16:00
                                    </p>
                              </div>

                              <div className="socialNetwork">
                                    <h5>Следите за нами</h5>
                                    <ul>
                                          {socialNetwork.map(({ id, link, icon }) => {
                                                return <li key={id}><a href={link}>{icon}</a></li>
                                          })}
                                    </ul>
                              </div>
                        </div>
                  </aside>
            </>
      )
}
