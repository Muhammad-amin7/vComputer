import { useContext } from "react";
import { Context } from "../../Hooks/Context";
import { Col, Container, Row } from "react-bootstrap";
import { newsData } from "../../Constants/Data";
import "./News.scss";

export default function News() {
  const { language } = useContext(Context);
  return (
    <div className="news_page">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="title">{language === "uz" ? "Yangiliklar" : "Новости"}</h1>
          </Col>
        </Row>

        <Row>
          {newsData.map(({ id, image, title_ru, title_uz, text_ru, text_uz, date }) => {
            return (
              <Col lg={3} md={6} key={id}>
                <div className="news_item">
                  <img src={image} alt="" />
                  <h3>{language === "ru" ? title_ru : title_uz}</h3>
                  <p className="text">{language === "uz" ? text_uz : text_ru}</p>
                  <p className="date">{date}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}
