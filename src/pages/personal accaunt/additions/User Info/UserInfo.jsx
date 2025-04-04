import { FaEdit } from "react-icons/fa";
import "./UserInfo.scss";


export default function UserInfo() {
      return (
            <div className='user_info'>
                  <h3>Личные данные</h3>
                  <div className="info_wrap">
                        <div className="user_avatar">
                              <img src="" alt="" />
                              <p>Загрузить фото</p>
                        </div>

                        <div className="user_data">
                              <div className="data_item">
                                    <p className="title">ФИО</p>
                                    <p className="info">Иванов Иван Иванович</p>
                                    <FaEdit />
                              </div>

                              <div className="data_item">
                                    <p className="title">Телефон</p>
                                    <p className="info">+38 067 009 90 09</p>
                                    <FaEdit />
                              </div>

                              <div className="data_item">
                                    <p className="title">Email</p>
                                    <p className="info">ivanov@gmail.com</p>
                                    <FaEdit />
                              </div>
                        </div>
                  </div>
            </div>
      )
}
