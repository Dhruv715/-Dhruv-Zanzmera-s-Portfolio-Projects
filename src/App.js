import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavbarComponent from './Components/Navbar';
import Projects from './Components/Projects';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <NavbarComponent/>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/service" element={ <Service/> } />
        <Route path="/Projects" element={ <Projects/> } />
        <Route path="/Testimonials" element={ <Testimonials/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>

    <Footer/>
    </>
  );
}

export default App;
