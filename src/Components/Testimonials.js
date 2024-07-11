import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO - Art InfoTech',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in.',
      stars: 4.5, // Adjust as needed
    },
    {
      id: 2,
      name: 'Mark Doen',
      position: 'CEO - Rajodariya InfoTech',
      image: 'https://img.freepik.com/premium-photo/portrait-one-young-happy-cheerful-man-smiling-looking-camera-having-fun-headshot-male-person-working-home-office_516988-1986.jpg',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in.',
      stars: 4.5, // Adjust as needed
    },
    {
        id: 3,
        name: 'Hireni Guyani',
        position: 'CEO - MyForexs InfoTech',
        image: 'https://media.istockphoto.com/id/1198252585/photo/happy-indian-woman-look-at-webcam-doing-job-interview-videochat.jpg?s=612x612&w=0&k=20&c=4xvWW9lNc_VKMdMx9WYR491-NEoNt9su5Ug5CSHdD64=',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in.',
        stars: 4.5, // Adjust as needed
      },
      {
        id: 4,
        name: 'Maya Sonaniya',
        position: 'CEO - FaraxTi InfoTech',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4KfQYNlJojREBWzAqUvLyI3M1Fv2T1Ut9Nh9KNCUNki6dQrJIO36LqQEMvmQ6pTY98c&usqp=CAU',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in.',
        stars: 4.5, // Adjust as needed
      },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed to 2 seconds (2000ms)
    pauseOnHover: true,
  };

  return (
    <section id="testimonials" className="mb-5 py-4 bg-white" style={{minHeight :'78vh'}}>
      <Container>
        <h1 className="poppinsFont fw-bold mb-5 text-center headingmaster fs-2">
          Testimonials
        </h1>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="testi-item bg-white shadow-lg rounded p-4">
                    <div className="testi-author-info d-flex align-items-center">
                      <img
                        src={testimonial.image}
                        style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                        className="img-thumbnail rounded-circle"
                        alt="User Image"
                      />
                      <div className="author ps-3 poppinsFont">
                        <h1 className="fs-3">{testimonial.name}</h1>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="py-2 text-muted">{testimonial.comment}</p>
                    <div className="rating">
                      {[...Array(Math.floor(testimonial.stars))].map((_, index) => (
                        <i key={index} className="ri-star-fill"></i>
                      ))}
                      {testimonial.stars % 1 !== 0 && (
                        <i className="ri-star-half-line"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
