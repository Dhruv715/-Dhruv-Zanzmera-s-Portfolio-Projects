import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Service() {
  return (
    <section id="services" className="py-5" style={{minHeight :'85vh'}}>
      <Container>
        <h1 className="poppinsFont fw-bold mb-5 text-center headingmaster fs-2">
          What I Do
        </h1>
        <Row className="d-flex justify-content-evenly">
          <Col
            lg={3}
            md={8}
            sm={8}
            xs={8}
            className="bg-light shadow-lg rounded poppinsFont py-4 text-center my-2 mx-auto"
          >
            <i className="ri-paint-brush-line fs-1" style={{ color: '#564c41' }}></i>
            <h2 className="fs-5">Web Designing</h2>
            <p className="text-muted">
              Crafting visually appealing and user-friendly web designs.
            </p>
          </Col>
          <Col
            lg={3}
            md={8}
            sm={8}
            xs={8}
            className="bg-light shadow-lg rounded poppinsFont py-4 text-center my-2 mx-auto"
          >
            <i className="ri-stack-line fs-1" style={{ color: '#564c41' }}></i>
            <h2 className="fs-5">MERN Stack Development</h2>
            <p className="text-muted">
              Building full-stack applications with MongoDB, Express, React, and Node.js.
            </p>
          </Col>
          <Col
            lg={3}
            md={8}
            sm={8}
            xs={8}
            className="bg-light shadow-lg rounded poppinsFont py-4 text-center my-2 mx-auto"
          >
            <i className="ri-lightbulb-flash-line fs-1" style={{ color: '#564c41' }}></i>
            <h2 className="fs-5">Problem Solving</h2>
            <p className="text-muted">
              Offering innovative solutions to complex coding challenges.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
