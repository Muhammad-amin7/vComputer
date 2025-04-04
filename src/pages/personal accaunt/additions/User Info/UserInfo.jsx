import { FaEdit } from "react-icons/fa";
import "./UserInfo.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../../../Hooks/Context";


export default function UserInfo() {
      const { userInfo, setUserInfo } = useContext(Context)
      useEffect(() => {
            setUserInfo(prev =>
                  (Array.isArray(prev) ? prev : []).map(item =>
                        item && item.id === 0 ? { ...item, value: "Muhammad Amin" } : item
                  )
            );
      }, [])


      console.log(userInfo);


      return (
            <div className='user_info'>
                  <h3>Личные данные</h3>
                  <div className="info_wrap">
                        <div className="user_avatar">
                              <img src="" alt="" />
                              <p>Загрузить фото</p>
                        </div>

                        <div className="user_data">
                              {userInfo.map((item) => {
                                    return <div className="data_item" key={item.id}>
                                          <p className="title">{item.name}</p>
                                          <p className="info">{item.value ? item.value : <span>Добавить</span>}</p>
                                          <FaEdit />
                                    </div>
                              })}
                        </div>
                  </div>
            </div>
      )
}
