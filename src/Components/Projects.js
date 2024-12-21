import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img1 from '../img/project6.png';
import img2 from '../img/project2.png';
import img3 from '../img/project4.png';

const cardStyle = {
  height: '100%',
};

const imgStyle = {
  height: '200px', // Adjust based on your preference
  objectFit: 'cover',
};

function Projects() {
  return (
    <section id="portfolio" className="py-5 bg-light" style={{minHeight :'85vh'}}>
      <Container>
        <h1 className="poppinsFont fw-bold mb-5 text-center headingmaster fs-2">
          Latest Project Works
        </h1>
        <Row className="poppinsFont">
          <Col lg={6} md={6} sm={8} xs={10} className="mx-auto my-2">
            <Card className="border-0 shadow-lg" style={cardStyle}>
              <Card.Img variant="top" src={img1} style={imgStyle} />
              <Card.Body className="text-center">
                <h6 className="fs-6">Car Hub: Online Car Selling Platform</h6>
                <a href="https://car-hub-user-side.vercel.app/" target='_blanck' style={{ color: 'black', fontWeight: '400' }} className="linker">
                  Live Demo
                </a>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} md={6} sm={8} xs={10} className="mx-auto my-2">
            <Card className="border-0 shadow-lg" style={cardStyle}>
              <Card.Img variant="top" src={img3} style={imgStyle} />
              <Card.Body className="text-center">
                <h6 className="fs-6">Mint Mart: Ecommerce Website</h6>
                <a href="https://ecommerce-platform-user-side.vercel.app/" target='_blanck' style={{ color: 'black', fontWeight: '400' }} className="linker">
                  Live Demo
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
