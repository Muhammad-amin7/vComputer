import { FaXmark } from 'react-icons/fa6'
import './Favorites.scss'
import { productData } from '../../Constants/ProductData'
import { useContext } from 'react'
import { Context } from '../../Hooks/Context'
import ProductItem from '../ProductItem/ProductItem'
import PropTypes from 'prop-types'

export default function Favorites({ active, setActive }) {
      const { favoriteProducts } = useContext(Context)
      return (
            <div className='favorites' style={{ display: active ? "flex" : 'none' }}>
                  <div className="content">
                        <div className="head">
                              <h1>Избранные товары</h1>
                              <FaXmark onClick={() => setActive(false)} />
                        </div>

                        <div className="products">
                              {favoriteProducts.length <= 0 ? <p className='noProduct'>Нет избранных товаров</p> :
                                    favoriteProducts.map(item =>
                                          productData.map((element, index) =>
                                                element.id === item ? <ProductItem product={[element]} key={index} /> : null
                                          ))
                              }
                        </div>
                  </div>
            </div>
      )
}

Favorites.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired
}