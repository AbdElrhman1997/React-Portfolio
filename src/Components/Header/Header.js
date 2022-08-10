import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import CV from '../../Images/CV.pdf';
import './Header.css';

function Header() {
    return (
        <header className='header' id='header'>
            <div className='container text-center' data-aos='fade-right' data-aos-delay='300'>
                <p className='h4 fw-lighter mt-lg-2 mt-5'>Hello I`m</p>
                <p className='h1 fw-bold my-4'>AbdElrhman Mohamed</p>
                <p className='textDynamic'>Full Stack Developer</p>
                <div className='row justify-content-center container-btn my-5'>
                    <div className='col-lg-2 col-sm-3 col-5 me-2'><a className='btn btn-outline-info lh-lg w-100' href={CV} download>Download CV</a></div>
                    <div className='btn btn-primary col-lg-2 col-sm-3 col-5 ms-2 d-flex align-items-center justify-content-center'><a href='#contact'>Let`s Talk</a></div>
                </div>
            </div>
        </header>
    )
}

export default Header;