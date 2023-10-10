import React from "react";
import Carouel from "../../ui/carousel/Carousel";
import Carddi from "../../ui/CardDl/Carddi";
import  CardSearch from '../../ui/CardSearch/CardSearch'
// import homeplanData from "../../assets/Data/homeplans";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from "../../ui/aboutSection/AboutSection";



function Home() {
  return (
    <div>
      <section className="p-0  carouel-section">
      <Carouel />

      <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best  plan  here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <CardSearch/>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    

<AboutSection/>




      <div>
        <Carddi />
      </div>
    </div>
  );
}

export default Home;
