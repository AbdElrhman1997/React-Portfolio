import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import {FaRegCheckCircle} from 'react-icons/fa';
import './Experience.css';

function Experience() {
    return (
        <div className='experience my-5 min-h-vh-100' id='exprience'>
            <p className='text-center h6 text-white-50'>What Skills I Have</p>
            <p className='text-center h3 text-info'>My Experience</p>
            <div className='row justify-content-evenly'>
                <div className='col-lg-5 col-10 row justify-content-around mt-4 vh-100 part'>
                    <div className='row justify-content-evenly'>
                    <p className='text-center fs-3 text-info pb-2 pt-5'>Frontend Development</p>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>HTML</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'>
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>CSS</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>JavaScript</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Bootstrap</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>React</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Mui</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-10 row justify-content-around mt-4 vh-100 part'>
                    <div className='row justify-content-evenly'>
                    <p className='text-center fs-3 text-info pb-2 pt-5'>Backend Development</p>
                    <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Node JS</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>Express</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>MongoDB</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>MVC</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
                                <FaRegCheckCircle className='me-2'/>
                                <p className='h6 fw-bolder'>PHP</p>
                            </div>
                            <p className='h6 text-white-50'>Experienced</p>
                        </div>
                        <div className='row flex-column col-lg-5 col-6 my-4'> 
                            <div className='d-flex'>
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