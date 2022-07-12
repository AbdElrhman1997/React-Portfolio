import { style } from '@mui/system';
import React from 'react';
import '../Bootstrap/bootstrap.min.css';
import img from '../images/myImg.jpg';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject} from 'react-icons/ai';
import {MdStars} from 'react-icons/md';
import './About.css';

function About() {
    const handleLeave=(e)=>{console.log('dd')};
    return (
        <div className='about my-5 text-center m-auto' id='about'>
            <p className='text-center h6 text-white-50'>Get To Know</p>
            <p className='text-center h3 text-info'>About Me</p>
            <div className='row justify-content-center'>
                <div className='col-12 row justify-content-around m-4'>
                    <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                        <MdStars className='fs-4 my-2'/>
                        <p>Experience</p>
                        <p className='text-white-50'>1+ Year Working</p>
                    </div>
                    <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                        <BsFillPersonFill className='fs-4 my-2'/>
                        <p>Clients</p>
                        <p className='text-white-50'>50+ WorldWide</p>
                    </div>
                    <div className='col-lg-3 col-5 mt-4 btn btn-primary'>
                        <AiFillProject className='fs-4 my-2'/>
                        <p>Projects</p>
                        <p className='text-white-50'>10+ Completed</p>
                    </div>
                    <p className='text-white-50 mt-5 space'>My Name is AbdElrhman Mohamed, I am from Giza I`m 20 Years Old,Student in Faculty of Petroleum and Mining Engineering, Al-Azhar University.</p>
                    <div className=''>
                        <div className='justify-content-start'>
                            <a href='#contact' className='btn btn-info col-3 mt-5 lh-lg wid'>Let`s Talk</a>
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