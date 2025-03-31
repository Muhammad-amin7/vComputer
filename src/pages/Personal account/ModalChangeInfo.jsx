import './ModalChangeInfo.scss'
import { useState } from "react"
import { FaXmark } from "react-icons/fa6";

export default function ModalChangeInfo({ title, value, setValue, active, setActive, data }) {
      const [newValue, setNewValue] = useState(value);

      const handleSaveInfo = () => {
            data(prev => ({
                  ...prev,
                  [Object.keys(prev).find(key => prev[key].title === title)]: {
                        ...prev[Object.keys(prev).find(key => prev[key].title === title)],
                        value: newValue
                  }
            }))

            setActive(false)
      }
      return (
            <div className="modalChangeInfo" style={{ display: active ? "flex" : "none" }}>
                  <div className="content">
                        <div className="head">
                              <h1>{title}</h1>
                              <FaXmark onClick={() => setActive(false)} />
                        </div>
                        <input
                              type="text"
                              placeholder={`Введите ${title}`}
                              value={newValue}
                              onChange={(e) => {
                                    setNewValue(e.target.value);
                              }}
                        />

                        <button onClick={handleSaveInfo}>СОХРАНИТЬ</button>
                  </div>
            </div>
      )
}
