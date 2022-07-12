import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Nav from './Components/Nav/Nav';
import Testimonials from './Components/Testimonialse/Testimonials';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';
import './Components/Bootstrap/bootstrap.min.css';

function App (){
  return(
    <div className='app'>
      <div className='container'>
        <Nav/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}
    


export default App;
