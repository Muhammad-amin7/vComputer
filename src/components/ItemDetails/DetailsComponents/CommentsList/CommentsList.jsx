import { useState } from "react"
import { commentsData } from "../../../../Constants/CommentData"
import { FaChevronRight, FaShoppingCart, FaStar } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";


export default function CommentsList() {
      // show all comments
      const [showComments, setShowComments] = useState(3)
      // stars clicked curent
      const [starCurrent, setStarCurrent] = useState()
      // stars hover curent
      const [starHover, setStarHover] = useState()
      // add new comment
      const [addNewComment, setAddNewComment] = useState(false)
      const [commentsDataState, setCommentsDataState] = useState(commentsData)
      return (
            <>
                  <h3 className="subTitle">Отзывы ({commentsDataState.length})</h3>
                  <section className="commentsList">
                        {commentsDataState.slice(0, showComments).map(({ id, userName, photo, stars, comment, pros, cons, like, date }) => {
                              return <div className="item" key={id}>
                                    <div className="image">
                                          <img src={photo} alt="" />
                                    </div>

                                    <div className="comment">
                                          <div className="top">
                                                <p className="name">{userName}</p>
                                                <p className="buyText">
                                                      <FaShoppingCart />
                                                      уже купил(а)
                                                </p>

                                                <div className="stars">
                                                      {Array(stars).fill().map((_, index) => (
                                                            <FaStar className='yellow' key={index} />
                                                      ))}
                                                </div>

                                                <p className="date">{date}</p>
                                          </div>

                                          <div className="main">
                                                <p className="text">{comment}</p>
                                                <p className='pros text'>
                                                      <span>Достоинства:</span>
                                                      {pros}
                                                </p>
                                                <p className="cons text">
                                                      <span>Недостатки:</span>
                                                      {cons}
                                                </p>
                                          </div>

                                          <div className="foot">
                                                <button>
                                                      <RiMessage2Line />
                                                      Ответить
                                                </button>

                                                <button onClick={() => setCommentsDataState(prev => prev.map(item => item.id === id ? { ...item, like: item.like + 1 } : item))}>
                                                      <BiLike />
                                                      {like}
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        })}

                        <div className="commentsButton">
                              <button className='newComment' onClick={() => setAddNewComment(true)}>ДОБАВИТЬ ОТЗЫВ</button>
                              <button className='showAllComments'
                                    onClick={() => setShowComments(prev => prev === 3 ? commentsData.length : 3)}>
                                    {showComments === 3 ? "Смотреть все отзывы" : "Свернуть отзывы"} <FaChevronRight />
                              </button>
                        </div>

                        <div className="newCommentsModal" style={{ display: addNewComment ? "flex" : "none" }}>
                              <div className="content">
                                    <div className="head">
                                          <p>Написать отзыв</p>
                                          <FaXmark onClick={() => setAddNewComment(false)} />
                                    </div>

                                    <div className="stars">
                                          {Array(5).fill(null).map((_, index) => {
                                                return <span key={index} className={index <= starHover ? "hover" : ""}>
                                                      <FaStar
                                                            onMouseEnter={() => setStarHover(index)}
                                                            onMouseLeave={() => setStarHover(-1)}
                                                            onClick={() => setStarCurrent(index)}
                                                            className={index <= starCurrent ? "active" : ""} />
                                                </span>
                                          })}
                                    </div>

                                    <form action="">
                                          <input type="text" placeholder="Имя" />
                                          <input type="text" placeholder="Email" />
                                          <input type="text" placeholder="Достоинства" />
                                          <input type="text" placeholder="Недостатки" />
                                          <input type="text" placeholder="Комментарий" />
                                          <div className="checkBox">
                                                <input type="checkbox" />
                                                <label htmlFor="">Уведомлять об ответах по электронной почте</label>
                                          </div>
                                    </form>

                                    <div className="foot">
                                          <button className="cencel" onClick={() => setAddNewComment(false)}>ОТМЕНИТЬ</button>
                                          <button>ДОБАВИТЬ ОТЗЫВ</button>
                                    </div>
                              </div>
                        </div>
                  </section >
            </>
      )
}
