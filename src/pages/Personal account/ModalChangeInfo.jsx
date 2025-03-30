import './ModalChangeInfo.scss'
import { useState } from "react"

export default function ModalChangeInfo({ title, val }) {
      const [value, setValue] = useState(val)
      console.log(value)
      return (
            <div className="modalChangeInfo">
                  <div className="content">
                        <div className="head">
                              <h1>{title}</h1>
                        </div>
                  </div>
            </div>
      )
}
