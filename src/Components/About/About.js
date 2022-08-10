import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject} from 'react-icons/ai';
import {MdStars} from 'react-icons/md';
import aboutImg from '../../Images/pexels-luis-gomes-546819.jpg';
import './About.css';

function About() {


    return (
        <div className='about text-center m-auto' id='about'>
            <p className='text-center h6 text-white-50' data-aos='fade-right'>Get To Know</p>
            <p className='text-center h3 text-info' data-aos='fade-right'>About Me</p>
            <div className='row justify-content-center'>
                <div className='col-12 row justify-content-around m-4'>
                    <div className='col-5 image' data-aos='fade-right' data-aos-delay='300'>
                        <img src={aboutImg} className='aboutImg'/>
                    </div>
                    <div className='row col-lg-7 col-12 justify-content-around' data-aos='fade-left' data-aos-delay='100'>
                        <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                            <MdStars className='fs-4 my-2'/>
                            <p>Experience</p>
                            <p className=''>1+ Year Working</p>
                        </div>
                        <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                            <BsFillPersonFill className='fs-4 my-2'/>
                            <p>Clients</p>
                            <p className=''>50+ WorldWide</p>
                        </div>
                        <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                            <AiFillProject className='fs-4 my-2'/>
                            <p>Projects</p>
                            <p className=''>10+ Completed</p>
                        </div>
                        <p className='mt-5 space'>My Name is AbdElrhman Mohamed, I am from Giza I`m 20 Years Old,Student in Faculty of Petroleum and Mining Engineering, Al-Azhar University.</p>
                        <div className=''>
                            <div className='justify-content-start'>
                                <a href='#contact' className='btn btn-info col-3 mt-5 lh-lg wid'>Let`s Talk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// AiFillProject
// BsPersonCircle

export default About;