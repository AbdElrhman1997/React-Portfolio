import React from 'react';
import img1 from '../../Images/1 (2).jpg';
import img2 from '../../Images/2.jpg';
import img3 from '../../Images/3.jpg';

import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio my-5' id='portfolio'>
            <p className='text-center h6 text-white-50' data-aos='fade-left'>My Reacent Work</p>
            <p className='text-center h3 text-info mb-4' data-aos='fade-left'>Portfolio</p>
            <div className='row justify-content-evenly gap-4'>
                <div className='cardPortofolio' data-aos='fade-right'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://homesapp-git-main-abdelrhman1997.vercel.app/' target='_blank'><img src={img1} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Real-Estates-Project<br/>With React&TailwindCss</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Real-estates-Project' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://homesapp-git-main-abdelrhman1997.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='cardPortofolio' data-aos='fade-left'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://socialapp-git-main-abdelrhman1997.vercel.app/' target='_blank'><img src={img2} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Social Media App<br/>React&Axios</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Media-App' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://socialapp-git-main-abdelrhman1997.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='cardPortofolio' data-aos='fade-right'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://reactrestaurant.vercel.app/' target='_blank'><img src={img3} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Restaurant App<br/>React&TailwindCss</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Restaurant' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://reactrestaurant.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='cardPortofolio' data-aos='fade-left'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://homesapp-git-main-abdelrhman1997.vercel.app/' target='_blank'><img src={img1} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Real-Estates-Project<br/>With React&TailwindCss</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Real-estates-Project' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://homesapp-git-main-abdelrhman1997.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='cardPortofolio' data-aos='fade-right'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://socialapp-git-main-abdelrhman1997.vercel.app/' target='_blank'><img src={img2} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Social Media App<br/>React&Axios</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Media-App' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://socialapp-git-main-abdelrhman1997.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
                <div className='cardPortofolio' data-aos='fade-left'>
                    <div className='row jusify-content-evenly'>
                    <div className='imgCont'><a href='https://reactrestaurant.vercel.app/' target='_blank'><img src={img3} className='card-img'/></a></div>
                        <div className='my-3 ms-2 fw-bold lh-lg'>Restaurant App<br/>React&TailwindCss</div>
                        <div className='w-fit'><a className='btn btn-outline-info lh-lg my-3 ms-3 w-100' href='https://github.com/AbdElrhman1997/React-Restaurant' target='_blank'>Github</a></div>
                        <div className='w-fit my-3'><a className='btn btn-info lh-lg w-100 fit' href='https://reactrestaurant.vercel.app/' target='_blank'>Live Demo</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;