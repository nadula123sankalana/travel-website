import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/logo1.png"
import Newsletter from "../Shared/Newsletter";
import Contact from "./Contact";

const About = () => {
  return (
    <><section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"About Us"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling Opens The Door To Creating{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
              Traveling is more than just a change of scenery; it’s an opportunity to create lasting memories and forge connections with people and places around the world. Every destination holds the promise of new adventures, from breathtaking landscapes to vibrant cultures. As you explore new horizons, you’ll collect stories, experiences, and moments that stay with you long after your journey ends. Whether it’s a serene beach at sunset, a bustling market filled with vibrant colors, or a quiet mountain trail, traveling opens the door to a lifetime of memories that will continue to inspire and enrich your life.
              </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
            <img src={logo1} height={250} width={250} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    <Contact/>
    <Newsletter /></>
  );
};

export default About;
