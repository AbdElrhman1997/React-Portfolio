import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import img from '../images/myImg.jpg';
import CV from '../images/CV.pdf';
import './Header.css';

function Header() {
    return (
        <header className='header d-flex flex-column align-items-center pt-lg-0 pt-5 my-5 min-h-vh-100' id='header'>
            <p className='h6 fw-lighter mt-lg-2 mt-5'>Hello I`m</p>
            <p className='h1 fw-bold mt-3'>AbdElrhman Mohamed</p>
            <p className='h6 fw-lighter text-white-50 mt-3'>FullStack Developer</p>
            <div className='row justify-content-center container-btn mt-lg-3 mt-5 '>
                <div className='col-lg-2 col-sm-3 col-4 me-2'><a className='btn btn-outline-info lh-lg w-100' href={CV} download>Download CV</a></div>
                <div className='btn btn-primary col-lg-2 col-sm-3 col-4 ms-2 lh-lg'><a href='#contact'>Let`s Talk</a></div>
            </div>
            <img src={img} className='imgHeader mt-lg-4 mt-5'/>
        </header>
    )
}

export default Header;