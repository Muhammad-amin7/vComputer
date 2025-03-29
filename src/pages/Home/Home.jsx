import { useEffect } from "react";
import Basket from "../../components/Basket/Basket";
import Comments from "../../components/Comments/Comments";  
import GameZone from "../../components/GameZone/GameZone";
import Header from "../../components/Header/Header";
import InfoSayt from "../../components/InfoSayt/InfoSayt";
import NewsHome from "../../components/NewsHome/NewsHome";
import Partners from "../../components/Partners/Partners";
import ProductsList from "../../components/ProductsList/ProductsList";

export default function Home() {
  // title
  useEffect(() => {
    document.title = "V COMP - online computer shop"
  }, [])
  return (
    <>
      <Basket />
      <Header />
      <ProductsList />
      <GameZone />
      <Comments />
      <Partners />
      <NewsHome />
      <InfoSayt />
    </>
  )
}
