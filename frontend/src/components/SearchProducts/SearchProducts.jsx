import { FaSearch } from 'react-icons/fa';
import './SearchProducts.scss';
import { productData } from '../../Constants/ProductData';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Hooks/Context';
import { FaXmark } from 'react-icons/fa6';

export default function SearchProducts() {
      const { language } = useContext(Context)
      const [searchValue, setSearchValue] = useState('');
      const [searchRes, setSearchRes] = useState([]);
      const [isSearch, setIsSearch] = useState(true)
      const { setAddedCart } = useContext(Context);
      const navigate = useNavigate();

      const handleSearch = () => {
            if (!searchValue.trim()) {
                  setSearchRes([]);
                  return;
            }

            const filteredResults = productData.filter(item =>
            (item.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.description?.toLowerCase().includes(searchValue.toLowerCase()))
            );

            setIsSearch(false)
            setSearchRes(filteredResults);
      };

      return (
            <div className='navSearch'>
                  <form className='searchProduct' onSubmit={(e) => e.preventDefault()}>
                        <input

                              value={searchValue}
                              onChange={(e) => { setSearchValue(e.target.value); setIsSearch(true) }}
                              className='d-none d-sm-block'
                              type="text"
                              placeholder={language === 'uz' ? "Qidiruv" : "Поиск"}
                        />
                        {isSearch ?
                              <button type="button" onClick={handleSearch}><FaSearch /></button>
                              : <button className='clear' onClick={() => { setSearchValue(""); setSearchRes([]); setIsSearch(true) }}><FaXmark /></button>
                        }
                  </form>

                  {searchRes.length > 0 && (
                        <div className="searchResult">
                              {searchRes.map(item => (
                                    <div className="item" key={item.id}>
                                          <div className="left" onClick={() => { navigate(`/productDetails/${item.id}`); setSearchValue('') }}>
                                                <img src={item.image[0]} alt={item.name} />
                                                <h4>{item.name}</h4>
                                          </div>
                                          <button
                                                onClick={() => setAddedCart(prev => {
                                                      const find = prev.find(element => element.id === item.id);
                                                      if (find) {
                                                            return prev.map(filt => filt.id === item.id ? { ...filt, count: filt.count + 1 } : filt);
                                                      } else {
                                                            return [...prev, { ...item, count: 1 }];
                                                      }
                                                })}
                                          >
                                                {language === 'uz' ? "SOTIB OLISH" : "КУПИТЬ"}
                                          </button>
                                    </div>
                              ))}
                        </div>
                  )}
            </div>
      );
}
