import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5 mt-5">
      <Container>
        <h1 className="poppinsFont fw-bold mb-5 text-center headingmaster fs-2 py-2">
          Contact Us
        </h1>
        <Row>
          <Col lg={6} md={10} sm={10} xs={10} className="my-5 mx-auto">
            <Row>
              <Col>
                <div className="d-flex">
                  <div>
                    <i className="ri-mail-line fs-3" style={{ color: '#564c41' }}></i>
                  </div>
                  <div className="textboxs ps-3">
                    <h1 className="fs-6 fw-bold">Email</h1>
                    <p>druvzanzmera@gmail.com</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex">
                  <div>
                    <i className="ri-phone-line fs-3" style={{ color: '#564c41' }}></i>
                  </div>
                  <div className="textboxs ps-3">
                    <h1 className="fs-6 fw-bold">Phone</h1>
                    <p>+91 99049 44640</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex">
                  <div>
                    <i className="ri-map-pin-line fs-3" style={{ color: '#564c41' }}></i>
                  </div>
                  <div className="textboxs ps-3">
                    <h1 className="fs-6 fw-bold">Location</h1>
                    <p>Amroli, Surat-30765</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={10} sm={10} xs={10} className="my-5 mx-auto">
            <form action="">
              <Row className="mb-3">
                <Col>
                  <input type="text" className="form-control shadow border-0 rounded" placeholder="Your Name" />
                </Col>
                </Row>
                <Row className="mb-3">
                <Col>
                  <input type="text" className="form-control shadow border-0 rounded" placeholder="Your Email" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <input type="text" className="form-control shadow border-0 rounded" placeholder="Your Subject" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <textarea
                    name="message"
                    className="form-control shadow border-0 rounded"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button className="mybutton">Send Message</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
