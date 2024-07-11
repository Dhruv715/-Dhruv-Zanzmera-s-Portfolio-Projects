import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import './About.css'; // Custom styles for the section

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h1 className="poppinsFont fw-bold mb-5 text-center headingmaster fs-2">
          About Us
        </h1>
        <Row className="justify-content-center my-5">
          <Col lg={6} md={12} sm={12} xs={12} className="my-3">
            <div className="textcontent">
              <h3 className="poppinsFont fs-4 py-2">
                Let's turn your ideas into reality and build something amazing
                together!
              </h3>
              <p className="poppinsFont text-muted fs-6">
                My portfolio showcases a diverse range of projects that
                highlight my skills and experience in web development. Whether
                it's creating interactive websites, developing custom web
                applications, or implementing e-commerce solutions, each
                project reflects my commitment to innovation, creativity, and
                attention to detail.
              </p>
            </div>
            <Row className="my-4 poppinsFont text-center">
              <Col>
                <h3>100</h3>
                <h4 className="fs-6 fw-normal text-muted">PROJECTS COMPLETED</h4>
              </Col>
              <Col>
                <h3>90</h3>
                <h6 className="fs-6 fw-normal text-muted">HAPPY CLIENTS</h6>
              </Col>
              <Col>
                <h3>90</h3>
                <h6 className="fs-6 fw-normal text-muted">POSITIVE REVIEWS</h6>
              </Col>
            </Row>
            <Row className="my-2">
              <Col xs={12} md={4} className="text-center text-md-start">
                <Button 
                  className="py-1 px-2 mybutton"
                  href={`${process.env.PUBLIC_URL}/Dhruv Zanzmera-Resume.pdf`} 
                  download="dhruv.pdf"
                >
                  Download CV
                </Button>
              </Col>
              <Col xs={12} md={8} className="fs-5 text-center mt-3 mt-md-0">
                <a href="https://www.linkedin.com/in/dhruv-zanzmera-3a04062b0/" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-fill mx-2"></i>
                </a>
                <a href="https://github.com/Dhruv715" target="_blank"  style={{textDecoration:'none'}} rel="noopener noreferrer">
                  <i className="ri-github-fill mx-2"></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="my-3">
            <div className="progressbars">
              <Row className="mt-4">
                <Col>
                  <h5 className="poppinsFont fs-6 text-muted">HTML & CSS</h5>
                  <ProgressBar now={98} label="98%" className="custom-progress" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5 className="poppinsFont fs-6 text-muted">
                    Bootstrap & Tailwind CSS
                  </h5>
                  <ProgressBar now={90} label="90%" className="custom-progress" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5 className="poppinsFont fs-6 text-muted">JavaScript</h5>
                  <ProgressBar now={98} label="98%" className="custom-progress" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5 className="poppinsFont fs-6 text-muted">ReactJs</h5>
                  <ProgressBar now={95} label="95%" className="custom-progress" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5 className="poppinsFont fs-6 text-muted">
                    NodeJs & MongoDB & MySql
                  </h5>
                  <ProgressBar now={95} label="95%" className="custom-progress" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
