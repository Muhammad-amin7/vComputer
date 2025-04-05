import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./pages/News/News";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import { Context } from "./Hooks/Context";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Personal from "./pages/personal accaunt/Personal";
import { userData } from "./Constants/UserData";
import { commentsData } from "./Constants/CommentData";


export default function App() {
  // pass the registration
  const [passRegister, setPassRegister] = useState(false)

  // toggle left modal open/close
  const [toggleLeftModal, setToggleLeftModal] = useState(false)

  // list of purchased products
  const [addedCart, setAddedCart] = useState(() => {
    const savedCart = localStorage.getItem("addedCart");
    return savedCart ? JSON.parse(savedCart) : [];
  })

  // list of liked products
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteProducts");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // liked and purchased lists localStorage
  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
    localStorage.setItem("addedCart", JSON.stringify(addedCart));
  }, [favoriteProducts, addedCart]);

  // user info
  const [userInfo, setUserInfo] = useState(userData)

  // comments data state
  const [commentsList, setCommentsList] = useState(commentsData)

  // chenge language
  const [language, setLanguage] = useState("ru");

  return (
    <Context.Provider value={{ toggleLeftModal, setToggleLeftModal, addedCart, setAddedCart, favoriteProducts, setFavoriteProducts, passRegister, setPassRegister, userInfo, setUserInfo, commentsList, setCommentsList, language, setLanguage }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path='/*' element={<Error />} />
        <Route path="/personal/:page" element={<Personal />} />
      </Routes>
      <Footer />
    </Context.Provider>
  )
}
