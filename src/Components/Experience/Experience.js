import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import {FaRegCheckCircle} from 'react-icons/fa';
import './Experience.css';

function Experience() {
    return (
        <div className='experience my-5 min-h-vh-100' id='exprience'>
            <p className='text-center h6 text-white-50' data-aos='fade-left'>What Skills I Have</p>
            <p className='text-center h3 text-info' data-aos='fade-left'>My Experience</p>
            <div className='row justify-content-evenly' data-aos='fade-right' data-aos-delay='100'>
                <div className='col-lg-5 col-10 row justify-content-around mt-4 card'>
                    <div className='row justify-content-evenly text-center'>
                        <p className='text-center fs-3 text-info pb-2 pt-5'>FrontEnd Development</p>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>HTML</p>
                            </div>
                            <p className='h6 text-white-50 ms-2'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'>
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>CSS</p>
                            </div>
                            <p className='h6 text-white-50 ms-2'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>JavaScript</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Sass</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>React</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>TailwindCss</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-10 row justify-content-around mt-4 card' data-aos='fade-left' data-aos-delay='200'>
                    <div className='row justify-content-evenly text-center'>
                        <p className='text-center fs-3 text-info pb-2 pt-5'>BackEnd Development</p>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Node JS</p>
                            </div>
                            <p className='h6 text-white-50 ms-2'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'>
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Express</p>
                            </div>
                            <p className='h6 text-white-50 ms-2'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>MongoDB</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>MVC</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>P H P</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-md-6 col-sm-6 col-12 my-4'> 
                            <div className='d-flex justify-content-center'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>FireBase</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
// 
// 
// 
// 
// 
// 