import { FaEdit } from "react-icons/fa";
import "./UserInfo.scss";
import { useContext, useState } from "react";
import { Context } from "../../../../Hooks/Context";
import user from "../../../../assets/img/null user.svg"
import ChangeUserInfo from "../Change User info/ChangeUserInfo";
import LoginSocial from "../Login social/LoginSocial";


export default function UserInfo() {
      const { userInfo } = useContext(Context)
      const [changeID, setChangeID] = useState()
      const [changeActive, setChangeActive] = useState(false)

      return (
            <>
                  <div className='user_info'>
                        <h1 className="subTitle">Личные данные</h1>
                        <div className="info_wrap">
                              <div className="user_avatar">
                                    <img src={user} alt="" />
                                    <p>Загрузить фото</p>
                              </div>

                              <div className="user_data">
                                    {userInfo.map((item) => {
                                          return <div className="data_item" key={item.id}>
                                                <p className="title">{item.name}</p>
                                                <p className="info">{item.value ? item.value : <span>Добавить</span>}</p>
                                                <FaEdit onClick={() => { setChangeID(item.id); setChangeActive(true) }} />
                                          </div>
                                    })}

                                    <LoginSocial />
                              </div>

                              <ChangeUserInfo id={changeID} active={changeActive} setActive={setChangeActive} />
                        </div>
                  </div>
            </>
      )
}
