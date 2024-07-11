import React from 'react';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Section1 from './Section1';

function Home() {
  return (
    <div>
            <Section1/>
            <About/>
            <Service/>
            <Projects/>
            <Testimonials/>
            <Contact/>
    </div>
  );
}

export default Home;
