import './CatalogProductModal.scss'
import { CatalogName } from '../../Constants/Data'
import { FaChevronRight } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function CatalogProductModal({ active, setActive }) {
      const [activeMenu, setActiveMenu] = useState(0)

      useEffect(() => {
            if (active) {
                  document.querySelector('body').style.overflow = "hidden"
            }
            else {
                  document.querySelector('body').style.overflow = "auto"
            }
            return (() => {
                  document.querySelector('body').style.overflow = "auto"
            })

      }, [active])

      return (
            <div className='catalogModalBg' style={{ display: active ? "flex" : 'none' }}>
                  {/* <ModalBG /> */}
                  <div className='catalogProductModal'>
                        <div className='close' onClick={() => setActive(false)}> <FaXmark /></div>
                        <ul className='menu'>
                              {CatalogName.map(({ id, name, icon }) => {
                                    return <React.Fragment key={id}>
                                          <li onClick={() => setActiveMenu(id)} key={id} className={id === activeMenu ? "active" : null}>
                                                <img src={icon} alt="" />
                                                <span>{name}</span>
                                                <FaChevronRight />
                                          </li>

                                          {activeMenu === id &&
                                                <ul className='d-block d-sm-none smContent'>
                                                      {
                                                            CatalogName.filter(item => item.id === activeMenu).map(({ menu }) => (
                                                                  menu.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                  ))

                                                            ))
                                                      }
                                                </ul>}
                                    </React.Fragment>

                              })}
                        </ul>

                        <div className="content d-none d-sm-block">
                              <ul>
                                    {
                                          CatalogName.filter(item => item.id === activeMenu).map(({ menu, name, id }) => (
                                                <div key={id}>
                                                      <h1>{name}</h1>
                                                      {menu.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                      ))}
                                                </div>
                                          ))

                                    }
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

CatalogProductModal.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired,
}