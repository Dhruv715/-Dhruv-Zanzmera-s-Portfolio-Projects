import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../img/Person1.png';
import './Section1.css';  // Import the custom CSS file

function Section1() {
  return (
    <section id="home">
      <Container>
        <Row className="min-vh-100 align-items-center align-content-center">
          <Col lg={6} md={8} sm={12} xs={12} className="mx-auto">
            <div className="home-img text-center">
              <img src={img} className="img-fluid animated-img" alt="Moving Person Vector" />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="mx-auto">
            <div className="home-text poppinsFont">
              <h2 className="text-muted mb-1">Hello, I'm</h2>
              <h1 className="headingmaster text-uppercase fs-1 fw-bold">
                <span className="typed-text">Full Stack Web Developer</span>
              </h1>
              <h2 className="fs-4 text-uppercase text-dark">Dhruv Zanzmera</h2>
              <p className="mt-4 text-muted poppinsFont">
                As a Full Stack Developer, I specialize in utilizing a variety
                of programming languages, frameworks, and tools to bring
                projects to life. From crafting responsive and visually
                appealing front-end interfaces using HTML, CSS, and
                JavaScript, to designing robust and efficient back-end systems
                with Node.js, Express, and databases like MongoDB and MySQL,
                I'm dedicated to delivering high-quality solutions that exceed
                expectations.
              </p>
              <Button href="#portfolio" className="mybutton mt-3">My Work</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
